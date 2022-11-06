import { ADD_EXPRESSION, SET_RESULT, SET_PREVIOUS_EXPRESSION } from "@types/calculatorTypes";

const initialState = {
  expression: "",
  result: "",
  previousExpression: "",
};

export function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EXPRESSION:
      return {
        ...state,
        expression: action.payload,
      };
    case SET_RESULT:
      return {
        ...state,
        result: action.payload,
      };
    case SET_PREVIOUS_EXPRESSION:
      return {
        ...state,
        previousExpression: action.payload,
      };
    default:
      return state;
  }
}
