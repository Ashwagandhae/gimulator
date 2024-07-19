// src/lib/util.ts
import { device } from "gimulator";
function textProperty(name, value = "") {
  return device("property").options({
    propertyName: name,
    valueType: "string",
    defaultValueText: value
  });
}
function createOnChannelFunction(b) {
  return function(name, code) {
    return b.addDevice(device("notification").addChannelCodeGrid(name, code));
  };
}

// src/lib/runtime.ts
function addRuntime(b) {
  let onChannel = createOnChannelFunction(b);
  b.addDevice(textProperty("call", "x,x,x"));
  b.addDevice(textProperty("stack", "x,x,x"));
  for (let i = 0; i < 2; i++) {
    b.addDevice(textProperty("stack[" + i + "]"));
  }
  onChannel("call", (d) => {
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

export {
  createOnChannelFunction,
  addRuntime
};
