import { Union } from 'gimblocks/device';
import { build, device } from 'gimulator';

function textProperty(name: string) {
  return device('property').options({
    propertyName: name,
    valueType: 'string',
    defaultValueText: '',
  });
}

let b = build('relative');
b.addDevice(textProperty('call'));
b.addDevice(textProperty('stack'));
b.addDevice(
  device('notification').addChannelCodeGrid('start', (d: Union) => {
    d.setPropertyValue('stack', '10');
    d.setPropertyValue('call', 'fib');
    d.broadcastMessageOnChannel('call');
  })
);

export function getBuild() {
  return b;
}

export function sim() {}
