const selectHistory = (state) => state.historyReducer.history;
const selectHistoryVisability = (state) => state.historyReducer.historyVisability;

export { selectHistory, selectHistoryVisability };
