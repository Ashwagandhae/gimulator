import { build, device, Sim, toBuild, transform } from 'gimulator';
import { createOnChannelFunction, textProperty } from '../lib/util';
import { addRuntime } from '../lib/runtime';

let b = build('relative');

let onChannel = createOnChannelFunction(b);

addRuntime(b);

b.addDevice(
  device('button')
    .options({
      interactionDuration: 0,
      guiMessage: 'start',
      channel: 'start',
    })
    .transform(transform(0, 64))
);

onChannel('start', (d) => {
  d.setPropertyValue('stack', '10,x,x,x');
  d.setPropertyValue('call', 'fib0,done,x,x,x');
  d.broadcastMessageOnChannel('call');
});

onChannel('done', (d) => {
  let res = d.getProperty('stack[0]') as string;
  console.log('done', res);
  d.sendNotificationTitleContent('done', res);
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

export default {
  build: toBuild(b.build()),
  sim: sim,
};

function logState(step: number, sim: Sim) {
  const logProperties = ['stack', 'stack[0]', 'stack[1]', 'call'];
  // make square
  console.log('---------------------------------');
  console.log('| step:', step);
  for (let i = 0; i < logProperties.length; i++) {
    let value = sim.getProperty(logProperties[i]);
    console.log(`| ${logProperties[i]}: `, value);
  }
  console.log('---------------------------------');
}
function sim() {
  let sim = new Sim(b.build());
  sim.broadcastOn('start');
  for (let i = 0; i < 10000; i++) {
    logState(i, sim);
    if (Object.keys(sim.state.channels).length === 0) {
      break;
    }
    sim.update();
  }
}
