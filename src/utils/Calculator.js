function add(x, y) {
  return parseFloat((+x + +y).toFixed(3));
}
function sub(x, y) {
  return parseFloat((+x - +y).toFixed(3));
}
function mul(x, y) {
  return parseFloat((+x * +y).toFixed(3));
}
function div(x, y) {
  return parseFloat((+x / +y).toFixed(3));
}

function mod(x, y) {
  return parseFloat((+x % +y).toFixed(3));
}

const Command = function (execute, undo, value) {
  this.execute = execute;
  this.undo = undo;
  this.value = value;
};

const AddCommand = function (value) {
  return new Command(add, sub, value);
};

const SubCommand = function (value) {
  return new Command(sub, add, value);
};

const MulCommand = function (value) {
  return new Command(mul, div, value);
};

const DivCommand = function (value) {
  return new Command(div, mul, value);
};

const ModCommand = function (value) {
  return new Command(mod, div, value);
};

const Calculator = function () {
  let current = 0;
  const commands = [];

  function action(command) {
    let name = "";
    switch (command.execute.name) {
      case "add":
        name = `${current} + ${command.value} `;
        break;
      case "sub":
        name = `${current} - ${command.value} `;
        break;
      case "mul":
        name = `${current} * ${command.value} `;
        break;
      case "div":
        name = `${current} / ${command.value} `;
        break;
      case "mod":
        name = `${current} % ${command.value} `;
        break;
      default:
        break;
    }
    return name;
  }

  return {
    execute: function (command) {
      commands.push(action(command));
      current = command.execute(current, command.value);
    },

    undo: function () {
      const command = commands.pop();
      current = command.undo(current, command.value);
      console.log("Undo " + action(command) + ": " + command.value);
    },

    getCurrentValue: function () {
      return current;
    },

    setCurrentValue: function (value) {
      return (current = value);
    },

    getCommands: () => commands,
  };
};

const calculator = new Calculator();
const operators = ["+", "-", "*", "/", "%"];

const scopes = ["(", ")"];

function executeCommand(expr, value, obj) {
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

function calcHelper(obj, numberStack, operationStack) {
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

function calctulateExpression(expression) {
  const obj = new Calculator();

  const operations = {
    "-": 1,
    "+": 1,
    "*": 2,
    "/": 2,
    "%": 2,
  };
  const numberStack = [];
  const operationStack = [];

  let arr = "";
  const expressionArray = [];
  for (let i = 0; i < expression.length; i++) {
    if ((expression[i] >= 0 && expression[i] <= 9) || expression[i] === ".") {
      arr += expression[i];
      i === expression.length - 1 && expressionArray.push(arr);
    } else if (
      operators.includes(expression[i]) ||
      scopes.includes(expression[i])
    ) {
      if (
        (expression[i] === "+" || expression[i] === "-") &&
        arr.length === 0
      ) {
        arr += expression[i];
        i === expression.length - 1 && expressionArray.push(arr);
        continue;
      }
      arr.length !== 0 && expressionArray.push(arr);
      arr = "";
      expressionArray.push(expression[i]);
    } else throw new Error("Wrong input");
  }
  expression = [...expressionArray];

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] >= 0 || expression[i] <= 0)
      numberStack.push(expression[i]);
    if (
      expression[i] === "+" ||
      expression[i] === "-" ||
      expression[i] === "*" ||
      expression[i] === "/" ||
      expression[i] === "%" ||
      expression[i] === "("
    ) {
      if (expression[i] === "(") {
        operationStack.push("(");
        continue;
      }
      if (
        operations[expression[i]] <=
        operations[operationStack[operationStack.length - 1]]
      ) {
        while (
          operations[operationStack[operationStack.length - 1]] >=
            operations[operationStack[operationStack.length - 2]] ||
          operations[expression[i]] <=
            operations[operationStack[operationStack.length - 1]]
        ) {
          calcHelper(obj, numberStack, operationStack);
        }
        operationStack.push(expression[i]);
      } else {
        operationStack.push(expression[i]);
      }
    } else if (expression[i] === ")") {
      while (operationStack[operationStack.length - 1] !== "(") {
        calcHelper(obj, numberStack, operationStack);
      }
      operationStack.pop();
    }
  }
  while (
    operations[operationStack[operationStack.length - 1]] >=
      operations[operationStack[operationStack.length - 2]] ||
    operationStack.length === 1
  ) {
    calcHelper(obj, numberStack, operationStack);
  }
  return numberStack.join("");
}
export {
  AddCommand,
  SubCommand,
  MulCommand,
  DivCommand,
  ModCommand,
  calculator,
  calctulateExpression,
};
