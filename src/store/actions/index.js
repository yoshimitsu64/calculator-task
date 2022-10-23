export function addHistory(payload) {
  return {
    type: "ADD_HISTORY",
    payload: payload,
  };
}

export function addExpression(payload) {
  return {
    type: "ADD_EXPRESSION",
    payload : payload
  };
}
