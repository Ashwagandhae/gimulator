import {
  addRuntime,
  createOnChannelFunction
} from "./chunk-ER5NZVFO.mjs";
import "./chunk-4UEJOM6W.mjs";

// src/projects/calc.ts
import { build, device, toBuild, transform } from "gimulator";
var b = build("relative");
var onChannel = createOnChannelFunction(b);
addRuntime(b);
b.addDevice(
  device("button").options({
    interactionDuration: 0,
    guiMessage: "calculate",
    channel: "start"
  }).transform(transform(0, 64))
);
onChannel("start", (d) => {
  d.setPropertyValue("stack", "1 + 1 + (10 + 1),x,x,x");
  d.setPropertyValue("call", "fib0,done,x,x,x");
  d.broadcastMessageOnChannel("call");
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
  let b2 = stack[1];
  let isNum = false;
  if (token == "+") {
    var res = a + b2;
  } else if (token == "-") {
    var res = a - b2;
  } else if (token == "*") {
    var res = a * b2;
  } else if (token == "/") {
    var res = a / b2;
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
var calc_default = {
  build: toBuild(b.build()),
  sim
};
export {
  calc_default as default
};
