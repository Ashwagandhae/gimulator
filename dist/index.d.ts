import { Program } from 'gimblocks';
import { Union } from 'gimblocks/device';
import { BuildGeneric, DeviceGeneric, DeviceTypeMap, DeviceBuilderGeneric, BuildBuilderGeneric, Build } from 'gimbuild';
export { Transform, TransformBuilder, transform } from 'gimbuild';
import * as miniplex from 'miniplex';
import { World, Query, With } from 'miniplex';

type UnionWithBake = Union & {
    bake: <T>(gimulatorValue: T, exprStringKey: string) => T;
};
type SimProgram = ((d: Union) => void) | {
    program: (d: UnionWithBake) => void;
    blocks: Program;
};
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
    activated?: boolean;
    visible?: boolean;
    triggerCount?: number;
    recursionCount?: number;
};
type State = {
    world: World<Entity>;
    channels: Record<string, number>;
    queries: {
        property: Query<With<Entity, 'property'>>;
    };
};

declare class Sim {
    state: State;
    constructor(build: SimBuild);
    update(): void;
    broadcastOn(channel: string): void;
    getProperty(name: string): number | string | boolean;
    get world(): miniplex.World<Entity>;
}
declare function sim(build: SimBuild): Sim;

declare function createBaked(f: (d: UnionWithBake) => void, exprStrings: {
    [key: string]: string;
}): SimProgram;
declare function createFunctionString(f: (d: Union) => void, functionString: string): SimProgram;

export { Sim, SimBuild, SimBuildBuilder, SimDevice, SimDeviceBuilder, SimProgram, UnionWithBake, build, createBaked, createFunctionString, device, sim, toBuild };
