"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __glob = (map) => (path) => {
  var fn = map[path];
  if (fn) return fn();
  throw new Error("Module not found in bundle: " + path);
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/lib/util.ts
function textProperty(name, value = "") {
  return (0, import_gimulator.device)("property").options({
    propertyName: name,
    valueType: "string",
    defaultValueText: value
  });
}
function createOnChannelFunction(b3) {
  return function(name, code) {
    return b3.addDevice((0, import_gimulator.device)("notification").addChannelCodeGrid(name, code));
  };
}
var import_gimulator;
var init_util = __esm({
  "src/lib/util.ts"() {
    "use strict";
    import_gimulator = require("gimulator");
  }
});

// src/lib/runtime.ts
function addRuntime(b3) {
  let onChannel3 = createOnChannelFunction(b3);
  b3.addDevice(textProperty("call", "x,x,x"));
  b3.addDevice(textProperty("stack", "x,x,x"));
  for (let i = 0; i < 2; i++) {
    b3.addDevice(textProperty("stack[" + i + "]"));
  }
  onChannel3("call", (d) => {
    let stack = d.getProperty("stack");
    let i = d.inText(stack, "FIRST", ",") - 1;
    d.setPropertyValue(
      "stack[0]",
      d.inTextGetSubstringFromTo(stack, "FIRST", null, "FROM_START", i)
    );
    stack = d.inTextGetSubstringFromTo(
      stack,
      "FROM_START",
      i + 2,
      "LAST",
      null
    );
    i = d.inText(stack, "FIRST", ",") - 1;
    d.setPropertyValue(
      "stack[1]",
      d.inTextGetSubstringFromTo(stack, "FIRST", null, "FROM_START", i)
    );
    let call = d.getProperty("call");
    i = d.inText(call, "FIRST", ",") - 1;
    d.setPropertyValue(
      "call",
      d.inTextGetSubstringFromTo(call, "FROM_START", i + 2, "LAST", null)
    );
    let currentCall = d.inTextGetSubstringFromTo(
      call,
      "FIRST",
      null,
      "FROM_START",
      i
    );
    d.broadcastMessageOnChannel(currentCall);
  });
}
var init_runtime = __esm({
  "src/lib/runtime.ts"() {
    "use strict";
    init_util();
  }
});

// src/projects/calc.ts
var calc_exports = {};
__export(calc_exports, {
  default: () => calc_default
});
function infixToPostfix(expression) {
  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2
  };
  const operators = [];
  const postfix = [];
  let numberBuffer = "";
  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (char >= "0" && char <= "9") {
      numberBuffer += char;
    } else {
      if (numberBuffer.length > 0) {
        postfix.push(numberBuffer);
        numberBuffer = "";
      }
      if (char === " ") {
        continue;
      }
      if (char === "(") {
        operators.push(char);
      } else if (char === ")") {
        while (operators.length && operators[operators.length - 1] !== "(") {
          postfix.push(operators.pop());
        }
        operators.pop();
      } else if (["+", "-", "*", "/"].includes(char)) {
        while (operators.length && precedence[operators[operators.length - 1]] >= precedence[char]) {
          postfix.push(operators.pop());
        }
        operators.push(char);
      }
    }
  }
  if (numberBuffer.length > 0) {
    postfix.push(numberBuffer);
  }
  while (operators.length) {
    postfix.push(operators.pop());
  }
  return postfix;
}
function evaluatePostfix(postfix, stack) {
  console.log(postfix, stack);
  let token = postfix.shift();
  let a = stack[0];
  let b3 = stack[1];
  let isNum = false;
  if (token == "+") {
    var res = a + b3;
  } else if (token == "-") {
    var res = a - b3;
  } else if (token == "*") {
    var res = a * b3;
  } else if (token == "/") {
    var res = a / b3;
  } else {
    var res = Number(token);
    isNum = true;
  }
  if (!isNum) {
    stack.shift();
    stack.shift();
  }
  if (postfix.length == 0) {
    return res;
  }
  stack.unshift(res);
  return evaluatePostfix(postfix, stack);
}
function sim() {
  let postfix = infixToPostfix("1 + 1 + (10 + 1)");
  console.log(evaluatePostfix(postfix, []));
}
var import_gimulator2, b, onChannel, calc_default;
var init_calc = __esm({
  "src/projects/calc.ts"() {
    "use strict";
    import_gimulator2 = require("gimulator");
    init_util();
    init_runtime();
    b = (0, import_gimulator2.build)("relative");
    onChannel = createOnChannelFunction(b);
    addRuntime(b);
    b.addDevice(
      (0, import_gimulator2.device)("button").options({
        interactionDuration: 0,
        guiMessage: "calculate",
        channel: "start"
      }).transform((0, import_gimulator2.transform)(0, 64))
    );
    onChannel("start", (d) => {
      d.setPropertyValue("stack", "1 + 1 + (10 + 1),x,x,x");
      d.setPropertyValue("call", "fib0,done,x,x,x");
      d.broadcastMessageOnChannel("call");
    });
    calc_default = {
      build: (0, import_gimulator2.toBuild)(b.build()),
      sim
    };
  }
});

// src/projects/fib.ts
var fib_exports = {};
__export(fib_exports, {
  default: () => fib_default
});
function logState(step, sim3) {
  const logProperties = ["stack", "stack[0]", "stack[1]", "call"];
  console.log("---------------------------------");
  console.log("| step:", step);
  for (let i = 0; i < logProperties.length; i++) {
    let value = sim3.getProperty(logProperties[i]);
    console.log(`| ${logProperties[i]}: `, value);
  }
  console.log("---------------------------------");
}
function sim2() {
  let sim3 = new import_gimulator3.Sim(b2.build());
  sim3.broadcastOn("start");
  for (let i = 0; i < 1e4; i++) {
    logState(i, sim3);
    if (Object.keys(sim3.state.channels).length === 0) {
      break;
    }
    sim3.update();
  }
}
var import_gimulator3, b2, onChannel2, fib_default;
var init_fib = __esm({
  "src/projects/fib.ts"() {
    "use strict";
    import_gimulator3 = require("gimulator");
    init_util();
    init_runtime();
    b2 = (0, import_gimulator3.build)("relative");
    onChannel2 = createOnChannelFunction(b2);
    addRuntime(b2);
    b2.addDevice(
      (0, import_gimulator3.device)("button").options({
        interactionDuration: 0,
        guiMessage: "start",
        channel: "start"
      }).transform((0, import_gimulator3.transform)(0, 64))
    );
    onChannel2("start", (d) => {
      d.setPropertyValue("stack", "10,x,x,x");
      d.setPropertyValue("call", "fib0,done,x,x,x");
      d.broadcastMessageOnChannel("call");
    });
    onChannel2("done", (d) => {
      let res = d.getProperty("stack[0]");
      console.log("done", res);
      d.sendNotificationTitleContent("done", res);
    });
    onChannel2("fib0", (d) => {
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
    onChannel2("fib1", (d) => {
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
    onChannel2("fib2", (d) => {
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
    fib_default = {
      build: (0, import_gimulator3.toBuild)(b2.build()),
      sim: sim2
    };
  }
});

// import("./projects/**/*.ts") in src/sim.ts
var globImport_projects_ts = __glob({
  "./projects/calc.ts": () => Promise.resolve().then(() => (init_calc(), calc_exports)),
  "./projects/fib.ts": () => Promise.resolve().then(() => (init_fib(), fib_exports))
});

// src/sim.ts
var project = process.argv[2];
async function main() {
  let mod = await globImport_projects_ts(`./projects/${project}.ts`);
  mod.default.sim();
}
main();
