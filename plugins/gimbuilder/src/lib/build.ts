import type { Build, Device, Program } from 'gimbuild';
import {
  DeviceId,
  generateDeviceId,
  gimkitInternalSend,
} from './gimkitInternal';
import { Ok, Err, Result } from 'ts-results';

export type Unbuilder = {
  deviceIds: DeviceId[];
};

class BuildError extends Error {
  constructor(
    public message: string,
    public unbuilder: Unbuilder,
    public deviceErrors: BuildDeviceError[]
  ) {
    super(message);
  }
}

export async function build(
  build: Build,
  position: { x: number; y: number } = { x: 16000, y: 16000 }
): Promise<Result<Unbuilder, BuildError>> {
  let deviceIds: DeviceId[] = [];
  if (build.positionType === 'absolute') {
    position = { x: 0, y: 0 };
  }
  let results = await Promise.all(
    build.devices.map((device) => {
      const deviceId = generateDeviceId();
      deviceIds.push(deviceId);
      return buildDevice(deviceId, position, device);
    })
  );
  const errors = results
    .filter((result) => result.err)
    .map((result) => {
      return result.val;
    });
  if (errors.length > 0) {
    return Err(new BuildError('error building devices', { deviceIds }, errors));
  }
  return Ok({ deviceIds });
}

class BuildDeviceError extends Error {
  constructor(
    public message: string,
    public device: Device,
    public codeGridErrors: BuildCodeGridError[]
  ) {
    super(message);
  }
}
async function buildDevice(
  id: DeviceId,
  position: { x: number; y: number },
  device: Device
): Promise<Result<null, BuildDeviceError>> {
  gimkitInternalSend('PLACE_DEVICE', {
    id,
    deviceTypeId: device.type,
    x: device.transform.x + position.x,
    y: device.transform.y + position.y,
    depth: device.transform.depth,
    options: JSON.stringify(device.options),
  });
  if (!device.codeGrids) {
    return Ok(null);
  }
  let results = await Promise.all(
    device.codeGrids.map(
      (codeGrid: Device['codeGrids'][number], index: number) =>
        buildCodeGrid(id, codeGrid, index)
    )
  );
  const errors = results
    .filter((result) => result.err)
    .map((result) => {
      return result.val;
    });
  if (errors.length > 0) {
    return Err(new BuildDeviceError('error building blocks', device, errors));
  }
  return Ok(null);
}

class BuildCodeGridError extends Error {
  constructor(
    public message: string,
    public codeGrid: CodeGridBuild
  ) {
    super(message);
  }
}

export type CodeGridBuild =
  | {
      type: 'channel_radio';
      channel: string;
      blocks: Program;
    }
  | {
      type: string;
      blocks: Program;
    };
async function buildCodeGrid(
  deviceId: DeviceId,
  codeGrid: CodeGridBuild,
  index: number
): Promise<Result<null, BuildCodeGridError>> {
  let triggerValue: string | undefined = undefined;
  if ('channel' in codeGrid) {
    triggerValue = codeGrid.channel;
  }
  gimkitInternalSend('CREATE_CODE_GRID', {
    deviceId,
    triggerType: codeGrid.type,
    triggerValue: triggerValue,
  });
  await timeoutPromise(1000);
  const codeGrids = GL.stores.world.devices.codeGrids.get(deviceId).items;
  const codeGridId: string | undefined = Array.from(codeGrids.keys())[index] as
    | string
    | undefined;
  if (!codeGridId) {
    return Err(new BuildCodeGridError('code grid not found', codeGrid));
  }
  console.log('codeGridId', codeGridId);
  gimkitInternalSend('JOIN_CODE_GRID', {
    deviceId,
    gridId: codeGridId,
  });
  gimkitInternalSend('SET_CODE_GRID_JSON', {
    deviceId,
    gridId: codeGridId,
    json: JSON.stringify(codeGrid.blocks),
  });
  gimkitInternalSend('LEAVE_CODE_GRID', {
    deviceId,
    gridId: codeGridId,
  });
  return Ok(null);
}

export function unbuild(unbuilder: Unbuilder) {
  unbuilder.deviceIds.forEach((id) => {
    gimkitInternalSend('REMOVE_DEVICE', { id });
  });
}

function timeoutPromise(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
