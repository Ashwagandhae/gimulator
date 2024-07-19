import {
  addRuntime,
  createOnChannelFunction
} from "./chunk-ER5NZVFO.mjs";
import "./chunk-4UEJOM6W.mjs";

// src/projects/fib.ts
import { build, device, Sim, toBuild, transform } from "gimulator";
var b = build("relative");
var onChannel = createOnChannelFunction(b);
addRuntime(b);
b.addDevice(
  device("button").options({
    interactionDuration: 0,
    guiMessage: "start",
    channel: "start"
  }).transform(transform(0, 64))
);
onChannel("start", (d) => {
  d.setPropertyValue("stack", "10,x,x,x");
  d.setPropertyValue("call", "fib0,done,x,x,x");
  d.broadcastMessageOnChannel("call");
});
onChannel("done", (d) => {
  let res = d.getProperty("stack[0]");
  console.log("done", res);
  d.sendNotificationTitleContent("done", res);
});
onChannel("fib0", (d) => {
  let n = d.getProperty("stack[0]") * 1;
  let stack = d.getProperty("stack");
  if (n <= 1) {
    d.setPropertyValue(
      "stack",
      `1,${d.inTextGetSubstringFromTo(stack, "FROM_START", 3, "LAST", null)}`
    );
  } else {
    d.setPropertyValue("stack", `${n - 1},${stack}`);
    d.setPropertyValue("call", `fib0,fib1,${d.getProperty("call")}`);
  }
  d.broadcastMessageOnChannel("call");
});
onChannel("fib1", (d) => {
  let fibN_1 = d.getProperty("stack[0]");
  let n = d.getProperty("stack[1]");
  let stack = d.getProperty("stack");
  d.setPropertyValue(
    "stack",
    `${n * 1 - 2},${fibN_1},${d.inTextGetSubstringFromTo(
      stack,
      "FROM_START",
      d.lengthOf(fibN_1) + d.lengthOf(n) + 3,
      "LAST",
      null
    )}`
  );
  d.setPropertyValue("call", `fib0,fib2,${d.getProperty("call")}`);
  d.broadcastMessageOnChannel("call");
});
onChannel("fib2", (d) => {
  let fibN_2 = d.getProperty("stack[0]");
  let fibN_1 = d.getProperty("stack[1]");
  let sum = fibN_2 * 1 + fibN_1 * 1;
  let stack = d.getProperty("stack");
  d.setPropertyValue(
    "stack",
    `${sum},${d.inTextGetSubstringFromTo(
      stack,
      "FROM_START",
      d.lengthOf(fibN_2) + d.lengthOf(fibN_1) + 3,
      "LAST",
      null
    )}`
  );
  d.broadcastMessageOnChannel("call");
});
var fib_default = {
  build: toBuild(b.build()),
  sim
};
function logState(step, sim2) {
  const logProperties = ["stack", "stack[0]", "stack[1]", "call"];
  console.log("---------------------------------");
  console.log("| step:", step);
  for (let i = 0; i < logProperties.length; i++) {
    let value = sim2.getProperty(logProperties[i]);
    console.log(`| ${logProperties[i]}: `, value);
  }
  console.log("---------------------------------");
}
function sim() {
  let sim2 = new Sim(b.build());
  sim2.broadcastOn("start");
  for (let i = 0; i < 1e4; i++) {
    logState(i, sim2);
    if (Object.keys(sim2.state.channels).length === 0) {
      break;
    }
    sim2.update();
  }
}
export {
  fib_default as default
};
