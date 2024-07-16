import { Union } from 'gimblocks/device';
import { BuildGeneric, DeviceGeneric, DeviceTypeMap, DeviceBuilderGeneric, BuildBuilderGeneric, Build } from 'gimbuild';
export { Transform, TransformBuilder, transform } from 'gimbuild';
import * as miniplex from 'miniplex';

type SimProgram = (d: Union) => void;
type SimBuild = BuildGeneric<SimProgram>;
type SimDevice = DeviceGeneric<SimProgram>;
declare class SimDeviceBuilder<T extends keyof DeviceTypeMap<SimProgram>> extends DeviceBuilderGeneric<SimProgram, T> {
    constructor(deviceType: T);
}
declare class SimBuildBuilder extends BuildBuilderGeneric<SimProgram> {
    constructor(positionType: 'relative' | 'absolute');
}
declare function device<T extends keyof DeviceTypeMap<SimProgram>>(deviceType: T): SimDeviceBuilder<T>;
declare function build(positionType: 'relative' | 'absolute'): SimBuildBuilder;

/**
 * Converts a gimulator build to a gimbuild build, allowing creation of the build in-game, but removing the information required to simulate it.
 * @param build The build to convert.
 * @returns The converted build.
 */
declare function toBuild(simBuild: SimBuild): Build;

type Entity = {
    readonly device: SimDevice;
    property?: number | string | boolean;
    text?: {
        text: string;
        color: string;
    };
};

declare class Sim {
    #private;
    constructor(build: SimBuild);
    update(): void;
    broadcastOn(channel: string): void;
    get world(): miniplex.World<Entity>;
}
declare function sim(build: SimBuild): Sim;

export { Sim, SimBuild, SimBuildBuilder, SimDevice, SimDeviceBuilder, SimProgram, build, device, sim, toBuild };
