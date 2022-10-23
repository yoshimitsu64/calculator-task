const initialState = {
  history: [],
  expression: "0",
  historyVisability: false,
};

function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_HISTORY":
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case "ADD_EXPRESSION":
      return {
        ...state,
        expression: action.payload,
      };
    case "SET_HISTORY_VISABILITY":
      return {
        ...state,
        historyVisability: action.payload,
      };
    case "CLEAN_HISTORY":
      return {
        ...state,
        history: [],
      };
    default:
      return state;
  }
}

export default calculatorReducer;
