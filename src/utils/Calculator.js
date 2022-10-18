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

module.exports = {
  AddCommand,
  SubCommand,
  MulCommand,
  DivCommand,
  ModCommand,
  calculator,
};
