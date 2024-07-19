import { Block, Program } from 'gimblocks';
import { Union } from 'gimblocks/device';
import { DeviceTypeMap } from 'gimbuild';

import { BuildBuilderGeneric, DeviceBuilderGeneric } from 'gimbuild';
import { BuildGeneric, DeviceGeneric } from 'gimbuild';

export { TransformBuilder, type Transform, transform } from 'gimbuild';

export type UnionWithBake = Union & {
  bake: <T>(gimulatorValue: T, exprStringKey: string) => T;
};
export type SimProgram =
  | ((d: Union) => void)
  | {
      program: (d: UnionWithBake) => void;
      blocks: Program;
    };

export type SimBuild = BuildGeneric<SimProgram>;
export type SimDevice = DeviceGeneric<SimProgram>;

export class SimDeviceBuilder<
  T extends keyof DeviceTypeMap<SimProgram>,
> extends DeviceBuilderGeneric<SimProgram, T> {
  constructor(deviceType: T) {
    super(deviceType);
  }
}

export class SimBuildBuilder extends BuildBuilderGeneric<SimProgram> {
  constructor(positionType: 'relative' | 'absolute') {
    super(positionType);
  }
}
export function device<T extends keyof DeviceTypeMap<SimProgram>>(
  deviceType: T
): SimDeviceBuilder<T> {
  return new SimDeviceBuilder(deviceType);
}

export function build(positionType: 'relative' | 'absolute'): SimBuildBuilder {
  return new SimBuildBuilder(positionType);
}
