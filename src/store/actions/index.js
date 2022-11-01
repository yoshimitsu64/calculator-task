import {
  ADD_EXPRESSION,
  ADD_HISTORY,
  CLEAN_HISTORY,
  SET_HISTORY_VISABILITY,
  SET_RESULT,
  TOOGLE_THEME,
  SET_PREVIOUS_EXPRESSION,
} from "@types"

export function addHistory(payload) {
  return {
    type: ADD_HISTORY,
    payload: payload,
  }
}

export function addExpression(payload) {
  return {
    type: ADD_EXPRESSION,
    payload: payload,
  }
}

export function setResult(payload) {
  return {
    type: SET_RESULT,
    payload: payload,
  }
}

export function setPreviousExpression(payload) {
  return {
    type: SET_PREVIOUS_EXPRESSION,
    payload: payload,
  }
}

export function setHistoryVisability(payload) {
  return {
    type: SET_HISTORY_VISABILITY,
    payload: payload,
  }
}

export function cleanHistory() {
  return {
    type: CLEAN_HISTORY,
  }
}

export function toogleTheme(payload) {
  return {
    type: TOOGLE_THEME,
    payload: payload,
  }
}
