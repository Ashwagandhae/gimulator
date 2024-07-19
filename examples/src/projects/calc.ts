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
      guiMessage: 'calculate',
      channel: 'start',
    })
    .transform(transform(0, 64))
);

onChannel('start', (d) => {
  d.setPropertyValue('stack', '1 + 1 + (10 + 1),x,x,x');
  d.setPropertyValue('call', 'fib0,done,x,x,x');
  d.broadcastMessageOnChannel('call');
});

const precedence = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
};
// function infixToPostfix(expression: string) {
//   const operators: string[] = [];
//   const postfix: string[] = [];
//   let numberBuffer = '';

//   for (let i = 0; i < expression.length; i++) {
//     const char = expression[i];

//     if (char >= '0' && char <= '9') {
//       numberBuffer += char;
//     } else {
//       if (numberBuffer.length > 0) {
//         postfix.push(numberBuffer);
//         numberBuffer = '';
//       }

//       if (char === ' ') {
//         continue;
//       }

//       if (char === '(') {
//         operators.push(char);
//       } else if (char === ')') {
//         while (operators.length && operators[operators.length - 1] !== '(') {
//           postfix.push(operators.pop()!);
//         }
//         operators.pop(); // remove '('
//       } else if (['+', '-', '*', '/'].includes(char)) {
//         while (
//           operators.length &&
//           precedence[operators[operators.length - 1]] >= precedence[char]
//         ) {
//           postfix.push(operators.pop()!);
//         }
//         operators.push(char);
//       }
//     }
//   }

//   if (numberBuffer.length > 0) {
//     postfix.push(numberBuffer);
//   }

//   while (operators.length) {
//     postfix.push(operators.pop()!);
//   }

//   return postfix;
// }

function evaluatePostfix(postfix: string[], numbers: number[]) {
  let token = postfix.shift();

  let a = numbers[0];
  let b = numbers[1];
  let isNum = false;
  if (token == '+') {
    var res = a + b;
  } else if (token == '-') {
    var res = a - b;
  } else if (token == '*') {
    var res = a * b;
  } else if (token == '/') {
    var res = a / b;
  } else {
    var res = Number(token);
    isNum = true;
  }
  if (!isNum) {
    numbers.shift();
    numbers.shift();
  }

  if (postfix.length == 0) {
    return res;
  }
  numbers.unshift(res!);
  return evaluatePostfix(postfix, numbers);
}

function sim() {
  // let postfix = infixToPostfix('1 + 1 + (10 + 1)');
  // console.log(evaluatePostfix(postfix, []));
}

export default {
  build: toBuild(b.build()),
  sim,
};
