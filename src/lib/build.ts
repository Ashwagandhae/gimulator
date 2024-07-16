import type { Build, Device } from 'gimbuild';
import type { SimDevice, SimBuild, SimProgram } from './builder';
import { jsToBlocks, Program } from 'gimblocks';

/**
 * Converts a gimulator build to a gimbuild build, allowing creation of the build in-game, but removing the information required to simulate it.
 * @param build The build to convert.
 * @returns The converted build.
 */
export function toBuild(simBuild: SimBuild): Build {
  return {
    ...simBuild,
    devices: simBuild.devices.map(
      <D extends SimDevice>(device: D): Device => ({
        ...device,
        codeGrids: device.codeGrids.map((codeGrid) => ({
          ...codeGrid,
          blocks: toProgram(codeGrid.blocks),
        })) as never[],
      })
    ),
  };
}

function toProgram(simProgram: SimProgram): Program {
  return jsToBlocks(simProgram.toString());
}
