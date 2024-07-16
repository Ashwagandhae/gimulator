"use strict";

// src/main.ts
var import_gimulator = require("gimulator");
var b = (0, import_gimulator.build)("relative");
function textProperty(name) {
  return (0, import_gimulator.device)("property").options({
    propertyName: name,
    valueType: "string",
    defaultValueText: ""
  });
}
function onChannel(name, code) {
  return b.addDevice((0, import_gimulator.device)("notification").addChannelCodeGrid(name, code));
}
b.addDevice(textProperty("call"));
b.addDevice(textProperty("stack"));
b.addDevice(textProperty("stack.pop"));
for (let i = 0; i < 3; i++) {
  b.addDevice(textProperty("stack[" + i + "]"));
}
onChannel("start", (d) => {
  d.setPropertyValue("stack,done", "4");
  d.setPropertyValue("call", "fib");
  d.broadcastMessageOnChannel("call");
});
onChannel("done", (d) => {
  console.log("done", d.getProperty("stack"));
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
function sim() {
  let sim2 = new import_gimulator.Sim(b.build());
  sim2.broadcastOn("start");
  for (let i = 0; i < 100; i++) {
    sim2.update();
  }
}

// src/sim.ts
sim();
