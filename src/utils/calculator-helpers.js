import { operators, scopes } from "@constants/buttons.js";
import { addExpression } from "../store/actions";

export const temporaryExpresssionArray = [];

export function validateExpression(value, expression, dispatch) {
  if (operators.includes(value)) {
    temporaryExpresssionArray.length = 0;
    if (expression[expression.length - 1] === ".") return;
    if (expression.length === 0 && value === "-") {
      dispatch(addExpression(expression + value));
    }
    if (expression.length !== 0) {
      if (operators.includes(expression[expression.length - 1])) {
        dispatch(addExpression(expression.slice(0, -1) + value));
      } else {
        dispatch(addExpression(expression + value));
      }
    }
  } else if (scopes.includes(value)) {
    if (value === "(") {
      if (
        expression.length === 0 ||
        operators.includes(expression[expression.length - 1])
      ) {
        dispatch(addExpression(expression + value));
      }
    } else if (value === ")") {
      if (
        expression.includes("(") &&
        !expression.includes(")") &&
        expression[expression.length - 1] !== "("
      ) {
        dispatch(addExpression(expression + value));
      } else if (
        expression.match(/\)/g)?.length < expression.match(/\(/g)?.length &&
        expression[expression.length - 1] !== "("
      ) {
        dispatch(addExpression(expression + value));
      }
    }
  } else {
    if (value === "." && expression.split()) {
      if (
        !temporaryExpresssionArray.includes(".") &&
        expression[expression.length - 1] !== "."
      ) {
        dispatch(addExpression(expression + value));
        temporaryExpresssionArray.push(value);
      }
    } else if (value === "0") {
      if (temporaryExpresssionArray.length > 0) {
        dispatch(addExpression(expression + value));
        temporaryExpresssionArray.push(value);
      } else if (operators.includes(expression[expression.length - 1])) {
        dispatch(addExpression(expression + value));
      } else if (expression[expression.length - 1] === ".") {
        dispatch(addExpression(expression + value));
        temporaryExpresssionArray.push(value);
      }
    } else if (value > 0) {
      if (expression[0] === "0" && expression.length === 1) {
        dispatch(addExpression(value));
        temporaryExpresssionArray.push(value);
      } else {
        dispatch(addExpression(expression + value));
        temporaryExpresssionArray.push(value);
      }
    }
  }
}
