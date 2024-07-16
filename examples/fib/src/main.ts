import { Union } from 'gimblocks/device';
import { build, device, Sim } from 'gimulator';

let b = build('relative');

function textProperty(name: string) {
  return device('property').options({
    propertyName: name,
    valueType: 'string',
    defaultValueText: '',
  });
}

function onChannel(name: string, code: (d: Union) => void) {
  return b.addDevice(device('notification').addChannelCodeGrid(name, code));
}

b.addDevice(textProperty('call'));
b.addDevice(textProperty('stack'));
b.addDevice(textProperty('stack.pop'));
for (let i = 0; i < 3; i++) {
  b.addDevice(textProperty('stack[' + i + ']'));
}
onChannel('start', (d) => {
  d.setPropertyValue('stack,done', '4');
  d.setPropertyValue('call', 'fib');
  d.broadcastMessageOnChannel('call');
});

onChannel('done', (d) => {
  console.log('done', d.getProperty('stack'));
});

onChannel('fib0', (d) => {
  // arg n
  let n = (d.getProperty('stack[0]') as number) * 1;
  let stack = d.getProperty('stack') as string;
  if (n <= 1) {
    d.setPropertyValue(
      'stack',
      `1,${d.inTextGetSubstringFromTo(stack, 'FROM_START', 3, 'LAST', null)}`
    );

    // stack: [n, ..] -> [1, ..]
    // call: [fib0, ..] -> [..]
  } else {
    // get fib(n-1)
    d.setPropertyValue('stack', `${n - 1},${stack}`);
    d.setPropertyValue('call', `fib0,fib1,${d.getProperty('call')}`);

    // stack: [n, ..] -> [n - 1, n, ..]
    // call: [fib0, ..] -> [fib0, fib1, ..]
  }
  d.broadcastMessageOnChannel('call');
});
// []
onChannel('fib1', (d) => {
  // get fib(n-2)
  let fibN_1 = d.getProperty('stack[0]') as string;
  let n = d.getProperty('stack[1]') as string;
  let stack = d.getProperty('stack') as string;
  d.setPropertyValue(
    'stack',
    `${(n as unknown as number) * 1 - 2},${fibN_1},${d.inTextGetSubstringFromTo(
      stack,
      'FROM_START',
      d.lengthOf(fibN_1) + d.lengthOf(n) + 3,
      'LAST',
      null
    )}`
  );
  d.setPropertyValue('call', `fib0,fib2,${d.getProperty('call')}`);
  d.broadcastMessageOnChannel('call');
  // stack: [fib(n - 1), n, ..] -> [n - 2, fib(n - 1), ..]
  // call: [fib1, ..] -> [fib0, fib2, ..]
});

onChannel('fib2', (d) => {
  let fibN_2 = d.getProperty('stack[0]') as string;
  let fibN_1 = d.getProperty('stack[1]') as string;

  let sum =
    (fibN_2 as unknown as number) * 1 + (fibN_1 as unknown as number) * 1;
  let stack = d.getProperty('stack') as string;
  d.setPropertyValue(
    'stack',
    `${sum},${d.inTextGetSubstringFromTo(
      stack,
      'FROM_START',
      d.lengthOf(fibN_2) + d.lengthOf(fibN_1) + 3,
      'LAST',
      null
    )}`
  );

  d.broadcastMessageOnChannel('call');
  // stack: [fib(n - 2), fib(n - 1), ..] -> [fib(n - 2) + fib(n - 1), ..]
  // call: [fib2, ..] -> [..]
});

export function getBuild() {
  return b.build();
}

export function sim() {
  let sim = new Sim(b.build());
  sim.broadcastOn('start');
  for (let i = 0; i < 100; i++) {
    sim.update();
  }
}
