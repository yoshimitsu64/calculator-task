import { ADD_HISTORY, ADD_EXPRESSION, SET_HISTORY_VISABILITY,CLEAN_HISTORY,TOOGLE_THEME,SET_RESULT,SET_PREVIOUS_EXPRESSION} from "@types"

const initialState = {
  history: [],
  expression: "",
  result: "0",
  previousExpression: "",
  historyVisability: false,
  isDarkTheme: false,
}

function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_HISTORY:
      return {
        ...state,
        history: [action.payload, ...state.history],
      }
    case ADD_EXPRESSION:
      return {
        ...state,
        expression: action.payload,
      }
    case SET_HISTORY_VISABILITY:
      return {
        ...state,
        historyVisability: action.payload,
      }
    case CLEAN_HISTORY:
      return {
        ...state,
        history: [],
      }
    case TOOGLE_THEME:
      return {
        ...state,
        isDarkTheme: action.payload,
      }
    case SET_RESULT:
      return {
        ...state,
        result: action.payload,
      }
    case SET_PREVIOUS_EXPRESSION:
      return {
        ...state,
        previousExpression: action.payload,
      }
    default:
      return state
  }
}

export default calculatorReducer
