import { SimBuildBuilder } from 'gimulator';
import { createOnChannelFunction, textProperty } from './util';

export function addRuntime(b: SimBuildBuilder) {
  let onChannel = createOnChannelFunction(b);

  b.addDevice(textProperty('call', 'x,x,x'));
  b.addDevice(textProperty('stack', 'x,x,x'));

  for (let i = 0; i < 2; i++) {
    b.addDevice(textProperty('stack[' + i + ']'));
  }

  onChannel('call', (d) => {
    // handle stack
    let stack = d.getProperty('stack') as string;

    // set stack[0]
    let i = d.inText(stack, 'FIRST', ',') - 1;
    d.setPropertyValue(
      'stack[0]',
      d.inTextGetSubstringFromTo(stack, 'FIRST', null, 'FROM_START', i)
    );

    // set stack[1]
    stack = d.inTextGetSubstringFromTo(
      stack,
      'FROM_START',
      i + 2,
      'LAST',
      null
    );
    i = d.inText(stack, 'FIRST', ',') - 1;
    d.setPropertyValue(
      'stack[1]',
      d.inTextGetSubstringFromTo(stack, 'FIRST', null, 'FROM_START', i)
    );

    // handle call
    let call = d.getProperty('call') as string;
    i = d.inText(call, 'FIRST', ',') - 1;

    // call = call[1..]
    d.setPropertyValue(
      'call',
      d.inTextGetSubstringFromTo(call, 'FROM_START', i + 2, 'LAST', null)
    );

    // broadcast on call[0]
    let currentCall = d.inTextGetSubstringFromTo(
      call,
      'FIRST',
      null,
      'FROM_START',
      i
    );
    d.broadcastMessageOnChannel(currentCall);
  });
}
