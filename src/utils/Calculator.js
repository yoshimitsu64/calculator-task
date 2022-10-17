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
    const name = command.execute.toString().substr(9, 3);
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return {
    execute: function (command) {
      current = command.execute(current, command.value);
      commands.push(command);
      console.log(action(command) + ": " + command.value);
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
  };
};
const calculator = new Calculator();
module.exports = {
  AddCommand,
  SubCommand,
  MulCommand,
  DivCommand,
  calculator,
  ModCommand,
};
