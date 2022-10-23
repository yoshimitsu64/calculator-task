const initialState = {
  history: [],
  expression: [],
};

function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_HISTORY":
      return {
        ...state,
        history: [...state.history,action.payload],
      };
    case "ADD_EXPRESSION":
        console.log("fffffffffffff")
      return {
        ...state,
        expression: action.payload,
      };
    default:
      return state;
  }
}

export default calculatorReducer;
