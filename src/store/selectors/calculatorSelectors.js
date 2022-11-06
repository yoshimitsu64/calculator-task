const selectExpression = (state) => state.calculatorReducer.expression;
const selectPreviousExpression = (state) => state.calculatorReducer.previousExpression;
const selectResult = (state) => state.calculatorReducer.result;

export { selectExpression, selectPreviousExpression, selectResult };
