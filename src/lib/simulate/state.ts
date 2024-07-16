import { Query, With, World } from 'miniplex';
import { SimBuild, SimDevice } from '../builder';

export type Entity = {
  readonly device: SimDevice;
  property?: number | string | boolean;
  text?: {
    text: string;
    color: string;
  };
};

export type State = {
  world: World<Entity>;
  channels: Record<string, number>;
  queries: {
    property: Query<With<Entity, 'property'>>;
  };
};

export function init(build: SimBuild): State {
  const world = new World<Entity>();
  const channels: Record<string, number> = {};

  // reverse because miniplex reverses
  build.devices.toReversed().forEach((device) => {
    world.add(newEntity(device));
  });

  let queries = {
    property: world.with('property'),
  };

  return { world, channels, queries };
}

function newEntity(device: SimDevice): Entity {
  let ret: Entity = { device };
  switch (device.type) {
    case 'property':
      let value;
      switch (device.options.valueType) {
        case 'number':
          value = device.options.defaultValueNumber;
          break;
        case 'string':
          value = device.options.defaultValueText;
          break;
        case 'boolean':
          value = device.options.defaultValueBoolean;
          break;
      }
      ret.property = value;
      break;
    case 'textBillboard':
      ret.text = {
        text: device.options.text,
        color: device.options.color,
      };
      break;
  }
  return ret;
}
