const operators = ["+", "-", "*", "/", "%"]

function add(x, y) {
  return parseFloat((+x + +y).toFixed(3))
}
function sub(x, y) {
  return parseFloat((+x - +y).toFixed(3))
}
function mul(x, y) {
  return parseFloat((+x * +y).toFixed(3))
}
function div(x, y) {
  if (y === "0") {
    throw Error("Error: Division by zero")
  } else {
    return parseFloat((+x / +y).toFixed(3))
  }
}

function mod(x, y) {
  return parseFloat((+x % +y).toFixed(3))
}

var Command = function (execute, undo, value, current) {
  this.execute = execute
  this.undo = undo
  this.value = value
  this.current = current
}

const AddCommand = function (value, current) {
  return new Command(add, sub, value, current)
}

const SubCommand = function (value, current) {
  return new Command(sub, add, value, current)
}

const MulCommand = function (value, current) {
  return new Command(mul, div, value, current)
}

const DivCommand = function (value, current) {
  return new Command(div, mul, value, current)
}

const ModCommand = function (value, current) {
  return new Command(mod, div, value, current)
}

const Calculator = function () {
  let current = 0
  let commands = []

  function action(command) {
    var name = command.execute.toString().substr(9, 3)
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  return {
    execute: function (command) {
      current = +command.execute(command.current, command.value)
      commands.push(command)
      return current
    },

    undo: function () {
      var command = commands.pop()
      current = command.undo(current, command.value)
      console.log("Undo " + action(command) + ": " + command.value)
    },

    getCurrentValue: function () {
      return current
    },
  }
}

function executeCommand(value1, value2, expr, obj) {
  switch (expr) {
    case "+":
      obj.execute(new AddCommand(value1, value2))
      break
    case "-":
      obj.execute(new SubCommand(value1, value2))
      break
    case "*":
      obj.execute(new MulCommand(value1, value2))
      break
    case "/":
      obj.execute(new DivCommand(value1, value2))
      break
    case "%":
      obj.execute(new ModCommand(value1, value2))
      break
    default:
      break
  }
}

function calculate(outputString, stack, obj, executeCommand) {
  let regex = /[0-9]/
  console.log(outputString)
  for (let i = 0; i < outputString.length; i++) {
    if (regex.test(outputString[i])) {
      stack.push(outputString[i])
    } else {
      executeCommand(stack.pop(), stack.pop(), outputString[i], obj)
      stack.push(obj.getCurrentValue())
    }
  }
  if (isNaN(stack[0])) {
    throw new Error("Error: Wrong input")
  }
  return stack.join("")
}

function tokenizeInput(input) {
  var expression = input.replace(/\s/g, "")

  if (/[^.0-9+\-/*^()]/g.test(expression)) return null

  if (
    /[+\-*/^(]/.test(expression.charAt(expression.length - 1)) ||
    /[+*/^)]/.test(expression.charAt(0))
  )
    return null

  var indexesForZeros = []
  for (let i = 0; i < expression.length; i++)
    if (expression.charAt(i) === "(" && expression.charAt(i + 1) === "-")
      indexesForZeros.push(i + 1)

  for (let i = 0; i < indexesForZeros.length; i++) {
    expression =
      expression.slice(0, indexesForZeros[i]) + "0" + expression.slice(indexesForZeros[i])
  }

  if (expression.charAt(0) === "-") expression = "0" + expression

  let tokens = []
  let parentheses = 0
  let currentNumber = ""
  let areWeInsideANumber = false
  let haveWeFoundDot = false
  let wasPreviousTokenOperator = false

  for (let i = 0; i < expression.length; i++) {
    var a = expression.charAt(i)

    if (areWeInsideANumber && haveWeFoundDot && a === ".") return null

    if (/[+\-/*^]/.test(a)) {
      if (wasPreviousTokenOperator) return null

      wasPreviousTokenOperator = true
    } else {
      wasPreviousTokenOperator = false
    }

    if (/[0-9]/.test(a)) {
      areWeInsideANumber = true
      currentNumber += a
    } else if (/[+\-/*^()]/.test(a)) {
      areWeInsideANumber = false
      haveWeFoundDot = false

      if (currentNumber !== "") tokens.push(currentNumber)

      currentNumber = ""

      tokens.push(a)
    }

    if (a === ".") {
      currentNumber += "."
    }

    if (a === "(") parentheses++
    if (a === ")") parentheses--
  }

  if (parentheses != 0) return null

  tokens.push(currentNumber)
  return tokens
}

function calctulateExpression(expression) {
  const obj = new Calculator()

  const operations = {
    "(": 0,
    "-": 1,
    "+": 1,
    "*": 2,
    "/": 2,
    "%": 2,
  }

  expression = tokenizeInput(expression)

  const stack = []
  const outputString = []

  let numbers = /[0-9]/
  let negatives = /[-]/
  let positives = /[+]/

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "(") {
      stack.push("(")
      if (expression[i - 1] === "-" && expression[i + 2] !== ")" && expression[i-2] !==")") {
        if (expression[i - 1] === "-" && expression[i + 2] !== ")") {
          if (!numbers.test(expression[i - 2]) && i !== 0) {
            outputString.push("0")
            continue
          }
        }
        if (expression[i - 1] === "+" && expression[i + 2] !== ")" && expression[i-2] !==")") {
          if (!numbers.test(expression[i - 2]) && i !== 0) {
            outputString.push("0")
            continue
          }
        }
      }
    } else if (operators.includes(expression[i])) {
      if (
        operations[stack[stack.length - 1]] < operations[expression[i]] ||
        stack[stack.length - 1] === "(" ||
        !stack[stack.length - 1]
      ) {
        stack.push(expression[i])
      } else {
        while (operations[stack[stack.length - 1]] >= operations[expression[i]]) {
          outputString.push(stack.pop())
        }
        stack.push(expression[i])
      }
    } else if (numbers.test(expression[i])) {
      if (negatives.test(expression[i])) {
        outputString.push("0")
        outputString.push(expression[i].slice(1))
        outputString.push(expression[i].slice(0, 1))
        continue
      }
      if (positives.test(expression[i])) {
        outputString.push("0")
        outputString.push(expression[i].slice(1))
        outputString.push(expression[i].slice(0, 1))
        continue
      }
      outputString.push(expression[i])
    } else if (expression[i] === ")") {
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        outputString.push(stack.pop())
      }
      stack.pop()
    }
  }

  if (stack.length !== 0) {
    while (stack.length !== 0) {
      outputString.push(stack.pop())
    }
  }

  return calculate(outputString, stack, obj, executeCommand)
}

console.log(calctulateExpression("(.3+1)-(111.25*66)"))
