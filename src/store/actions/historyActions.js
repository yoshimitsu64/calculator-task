import { ADD_HISTORY, SET_HISTORY_VISABILITY, CLEAN_HISTORY } from "@types/historyTypes";

export function addHistory(payload) {
  return {
    type: ADD_HISTORY,
    payload: payload,
  };
}
export function setHistoryVisability(payload) {
  return {
    type: SET_HISTORY_VISABILITY,
    payload: payload,
  };
}

export function cleanHistory() {
  return {
    type: CLEAN_HISTORY,
  };
}
