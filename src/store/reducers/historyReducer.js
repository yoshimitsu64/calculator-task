import { ADD_HISTORY, SET_HISTORY_VISABILITY, CLEAN_HISTORY } from "@types/historyTypes";

const initialState = {
  history: [],
  historyVisability: false,
};

export function historyReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_HISTORY:
      return {
        ...state,
        history: [action.payload, ...state.history],
      };
    case SET_HISTORY_VISABILITY:
      return {
        ...state,
        historyVisability: action.payload,
      };
    case CLEAN_HISTORY:
      return {
        ...state,
        history: [],
      };
    default:
      return state;
  }
}
