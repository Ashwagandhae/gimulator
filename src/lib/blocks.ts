import { SimProgram, UnionWithBake } from './builder';
import { jsToBlocks } from 'gimblocks';
import { parseExpressionAt } from 'acorn';
import { Union } from 'gimblocks/device';

export function createBaked(
  f: (d: UnionWithBake) => void,
  exprStrings: { [key: string]: string }
): SimProgram {
  let blocks = jsToBlocks(f.toString(), {
    customConvertExpression: function (
      expression,
      ctx,
      convertExpression
    ): ReturnType<typeof convertExpression> {
      function defaultRet() {
        return convertExpression(expression);
      }
      if (expression.type != 'CallExpression') return defaultRet();
      let callee = expression.callee;
      if (callee.type != 'MemberExpression') return defaultRet();
      if (callee.object.type != 'Identifier') return defaultRet();
      if (callee.object.name != ctx.device) return defaultRet();
      if (callee.property.type != 'Identifier') return defaultRet();
      if (callee.property.name != 'bake') return defaultRet();
      // now bake usage is certain, start throwing
      if (expression.arguments.length != 2)
        throw new Error(
          `bake requires two arguments, got ${expression.arguments.length}`
        );
      let exprStringKey = expression.arguments[1]!;
      if (exprStringKey.type != 'Literal')
        throw new Error(
          `bake requires string literal as second argument, got ${exprStringKey.type}`
        );
      if (typeof exprStringKey.value != 'string')
        throw new Error(
          `bake requires string literal as second argument, got ${exprStringKey.value}`
        );
      let exprString = exprStrings[exprStringKey.value];
      if (exprString == null)
        throw new Error(
          `exprString ${exprStringKey.value} not found in exprStrings`
        );
      return convertExpression(
        parseExpressionAt(exprString, 0, { ecmaVersion: 2020 })
      );
    },
  });
  return {
    program: f,
    blocks,
  };
}

export function createFunctionString(
  f: (d: Union) => void,
  functionString: string
): SimProgram {
  let blocks = jsToBlocks(functionString);
  return {
    program: f,
    blocks,
  };
}
