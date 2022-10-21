import {
  AddCommand,
  SubCommand,
  MulCommand,
  DivCommand,
  ModCommand
} from "./calculator.js";

export function executeCommand(expr, value, obj) {
  switch (expr) {
    case "+":
      obj.execute(new AddCommand(value));
      break;
    case "-":
      obj.execute(new SubCommand(value));
      break;
    case "*":
      obj.execute(new MulCommand(value));
      break;
    case "/":
      obj.execute(new DivCommand(value));
      break;
    case "%":
      obj.execute(new ModCommand(value));
      break;
    default:
      break;
  }
}

export function calcHelper(obj, numberStack, operationStack) {
  obj.setCurrentValue(numberStack[numberStack.length - 2]);
  executeCommand(
    operationStack[operationStack.length - 1],
    numberStack[numberStack.length - 1],
    obj
  );
  numberStack.splice(numberStack.length - 2, 2);
  numberStack.push(obj.getCurrentValue());
  operationStack.pop();
}