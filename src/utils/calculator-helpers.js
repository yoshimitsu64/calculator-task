import { operators, scopes } from "@constants/buttons.js";
import { addExpression } from "../store/actions";

export function validateExpression() {
  let arr = [];
  return function (value, expression, dispatch) {
    if (operators.includes(value)) {
      arr.length = 0;
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
      if (value === ".") {
        if (!arr.includes(".") && expression[expression.length - 1] !== ".") {
          dispatch(addExpression(expression + value));
          arr.push(value);
        }
      } else if (value === "0") {
        console.log(expression[expression.length - 1]);
        if (arr.length > 0) {
          dispatch(addExpression(expression + value));
          arr.push(value);
        } else if (operators.includes(expression[expression.length - 1])) {
          dispatch(addExpression(expression + value));
        } else if (expression[expression.length - 1] === ".") {
          dispatch(addExpression(expression + value));
          arr.push(value);
        }
      } else if (value > 0) {
        if (expression[0] === "0" && expression.length === 1) {
          dispatch(addExpression(value));
          arr.push(value);
        } else {
          dispatch(addExpression(expression + value));
          arr.push(value);
        }
      }
    }
  };
}
export const validator = validateExpression();
