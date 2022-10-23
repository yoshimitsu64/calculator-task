import { operators, scopes } from "@constants/buttons.js";

export function validateExpression() {
  let arr = [];
  return function (value, expression, setExpression) {
    if (operators.includes(value)) {
      arr.length = 0;
      if (expression[expression.length - 1] === ".") return;
      if (expression.length === 0 && value === "-") {
        setExpression(expression + value);
      }
      if (expression.length !== 0) {
        if (operators.includes(expression[expression.length - 1])) {
          setExpression((prev) => {
            return prev.slice(0, -1) + value;
          });
        } else {
          setExpression(expression + value);
        }
      }
    } else if (scopes.includes(value)) {
      if (value === "(") {
        if (
          expression.length === 0 ||
          operators.includes(expression[expression.length - 1])
        ) {
          setExpression(expression + value);
        }
      } else if (value === ")") {
        if (
          expression.includes("(") &&
          !expression.includes(")") &&
          expression[expression.length - 1] !== "("
        ) {
          setExpression(expression + value);
        } else if (
          expression.match(/\)/g)?.length < expression.match(/\(/g)?.length &&
          expression[expression.length - 1] !== "("
        ) {
          setExpression(expression + value);
        }
      }
    } else {
      if (value === ".") {
        if (!arr.includes(".") && expression[expression.length - 1] !== ".") {
          setExpression(expression + value);
          arr.push(value);
        }
      } else if (value === "0") {
        if (arr.length === 0) {
          setExpression(expression + value);
          arr.push(value);
        } else if (arr.length > 1) {
          console.log(arr[0] > 0);
          setExpression(expression + value);
          arr.push(value);
        } else if (expression[expression.length - 1] === ".") {
          setExpression(expression + value);
          arr.push(value);
        }
      } else {
        setExpression(expression + value);
        arr.push(value);
      }
      console.log(arr);
    }
  };
}
export const validator = validateExpression();
