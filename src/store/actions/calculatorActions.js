import { ADD_EXPRESSION, SET_RESULT, SET_PREVIOUS_EXPRESSION } from "@types/calculatorTypes";

export function addExpression(payload) {
  return {
    type: ADD_EXPRESSION,
    payload: payload,
  };
}

export function setResult(payload) {
  return {
    type: SET_RESULT,
    payload: payload,
  };
}

export function setPreviousExpression(payload) {
  return {
    type: SET_PREVIOUS_EXPRESSION,
    payload: payload,
  };
}
