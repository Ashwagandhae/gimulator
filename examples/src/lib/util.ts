import { device, SimBuildBuilder } from 'gimulator';
import { Union } from 'gimblocks/device';

export function textProperty(name: string, value: string = '') {
  return device('property').options({
    propertyName: name,
    valueType: 'string',
    defaultValueText: value,
  });
}

export function createOnChannelFunction(b: SimBuildBuilder) {
  return function (name: string, code: (d: Union) => void) {
    return b.addDevice(device('notification').addChannelCodeGrid(name, code));
  };
}
