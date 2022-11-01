import { createStore } from "redux"
import calculatorReducer from "./reducers"

export const store = createStore(calculatorReducer)
