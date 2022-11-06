import { TOOGLE_THEME } from "@types/themeTypes";

const initialState = {
  isDarkTheme: false,
};

export function themeReducer(state = initialState, action) {
  switch (action.type) {
    case TOOGLE_THEME:
      console.log("ccc");
      return {
        ...state,
        isDarkTheme: action.payload,
      };
    default:
      return state;
  }
}
