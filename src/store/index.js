import { combineReducers, createStore } from "redux";

import { calculatorReducer } from "@reducers/calculatorReducer";
import { historyReducer } from "@reducers/historyReducer";
import { themeReducer } from "@reducers/themeReducer";

export const store = createStore(
  combineReducers({
    calculatorReducer: calculatorReducer,
    historyReducer: historyReducer,
    themeReducer: themeReducer,
  }),
);
