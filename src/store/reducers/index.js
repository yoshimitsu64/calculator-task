const initialState = {
  history: [],
  expression: "0",
  historyVisability: false,
  isDarkTheme: false,
};

function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_HISTORY":
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case "ADD_EXPRESSION":
      console.log(action.payload)
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
      console.log("vaam")
      return {
        ...state,
        history: [],
      };
    case "TOOGLE_THEME":
      return {
        ...state,
        isDarkTheme: action.payload,
      };
    default:
      return state;
  }
}

export default calculatorReducer;
