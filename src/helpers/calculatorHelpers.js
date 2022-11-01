import { operators, scopes } from "@constants/buttons.js"
import { addExpression } from "@actions"

export const temporaryExpresssionArray = []

let copyTemporaryExpresssionArray = []

function changeOperator2(indexOfLasNumber, copyTemporaryExpresssionArray, expression) {
  if (
    copyTemporaryExpresssionArray[copyTemporaryExpresssionArray.length - 1] === "+" ||
    copyTemporaryExpresssionArray[copyTemporaryExpresssionArray.length - 1] === "-"
  ) {
    if (copyTemporaryExpresssionArray[copyTemporaryExpresssionArray.length - 1] === "+") {
      copyTemporaryExpresssionArray.splice(copyTemporaryExpresssionArray.length - 1, 1, "-")
      return
    } else {
      copyTemporaryExpresssionArray.splice(copyTemporaryExpresssionArray.length - 1, 1, "+")
      return
    }
  } else if (
    checkExpressionForOperators(copyTemporaryExpresssionArray) === false ||
    (containsOperator(copyTemporaryExpresssionArray[0]) === 1 &&
      containsOperator(copyTemporaryExpresssionArray.join("")) === 1)
  ) {
    if (copyTemporaryExpresssionArray[0] === "-") {
      copyTemporaryExpresssionArray.splice(0, 1)
    } else {
      copyTemporaryExpresssionArray.splice(0, 0, "-")
    }
  } else if (!(expression[expression.length - 1].match(/[/*%]/g) || []).length) {
    if (expression[indexOfLasNumber - 1] !== "-") {
      copyTemporaryExpresssionArray.splice(indexOfLasNumber, 0, "(", "-")
      copyTemporaryExpresssionArray.push(")")
    } else {
      copyTemporaryExpresssionArray.splice(indexOfLasNumber - 2, 2)
      copyTemporaryExpresssionArray.pop()
    }
  }
}

export function validateExpression(value, expression, dispatch) {
  copyTemporaryExpresssionArray = [...expression]
  if (operators.includes(value)) {
    temporaryExpresssionArray.length = 0
    if (expression[expression.length - 1] === ".") return
    if (expression.length === 0 && value === "-") {
      dispatch(addExpression(expression + value))
    }
    if (expression.length !== 0) {
      if (operators.includes(expression[expression.length - 1])) {
        dispatch(addExpression(expression.slice(0, -1) + value))
      } else {
        dispatch(addExpression(expression + value))
      }
    }
  } else if (scopes.includes(value)) {
    if (value === "(") {
      if (
        operators.includes(expression[expression.length - 1]) ||
        expression[expression.length - 1] === "(" ||
        expression === "0"
      ) {
        dispatch(addExpression(expression + value))
      } else if (expression === "") {
        dispatch(addExpression(value))
      }
    } else if (value === ")") {
      if (
        expression.includes("(") &&
        !expression.includes(")") &&
        expression[expression.length - 1] !== "("
      ) {
        dispatch(addExpression(expression + value))
      } else if (
        expression.match(/\)/g)?.length < expression.match(/\(/g)?.length &&
        expression[expression.length - 1] !== "("
      ) {
        dispatch(addExpression(expression + value))
      }
    }
  } else {
    if (value === "+/-") {
      let indexOfLasNumber = expression.lastIndexOf(temporaryExpresssionArray.join(""))
      changeOperator2(indexOfLasNumber, copyTemporaryExpresssionArray, expression)
      dispatch(addExpression(copyTemporaryExpresssionArray.join("")))
      return
    } else if (value === ".") {
      if (
        !temporaryExpresssionArray.includes(".") &&
        expression[expression.length - 1] !== "." &&
        expression[expression.length - 1] !== ")"
      ) {
        dispatch(addExpression(expression + value))
        temporaryExpresssionArray.push(value)
      }
    } else if (value === "0") {
      if (
        (temporaryExpresssionArray.length > 0 &&
          expression !== "0" &&
          temporaryExpresssionArray[0] !== "0") ||
        temporaryExpresssionArray.includes(".") ||
        expression[expression.length - 1] === "("
      ) {
        dispatch(addExpression(expression + value))
        temporaryExpresssionArray.push(value)
      } else if (operators.includes(expression[expression.length - 1])) {
        dispatch(addExpression(expression + value))
        temporaryExpresssionArray.push(value)
      } else if (expression[expression.length - 1] === ".") {
        dispatch(addExpression(expression + value))
        temporaryExpresssionArray.push(value)
      }
    } else if (value > 0 && expression[expression.length - 1] !== ")") {
      if (temporaryExpresssionArray.length >= 0) {
        if (
          temporaryExpresssionArray[temporaryExpresssionArray.length - 1] === "0" &&
          temporaryExpresssionArray[0] === "0" &&
          !temporaryExpresssionArray.includes(".")
        ) {
          return
        }
        dispatch(addExpression(expression + value))
        temporaryExpresssionArray.push(value)
      }
    }
  }
}

export function checkExpressionForOperators(expression) {
  for (let i = 1; i < expression.length; i++) {
    if (operators.includes(expression[i])) {
      return true
    }
  }
  return false
}

export function containsOperator(expression) {
  return (expression.match(/[+-/*%]/g) || []).length
}