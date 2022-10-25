import Keypad from "@components/keypad";
import { calctulateExpression } from "@utils/calculator";
import { validateExpression } from "@utils/calculator-helpers";
import { addHistory } from "@store/actions";
import { addExpression } from "@store/actions";
import { connect } from "react-redux";
import { Component } from "react";
import { temporaryExpresssionArray } from "@utils/calculator-helpers";

class KeypadContainer extends Component {
  getExpression = () => {
    return this.props.expression;
  };
  handleClick = (e) => {
    const { dispatch } = this.props;
    switch (e.target.value) {
      case "C":
        dispatch(addExpression("0"));
        break;
      case "CE":
        this.getExpression()[this.getExpression().length -1] === "." && temporaryExpresssionArray.pop();
        if(this.getExpression().length !==1 ){
          dispatch(addExpression(this.getExpression().slice(0, -1)))
        }
        if (this.getExpression().length === 1 && this.getExpression()[this.getExpression().length - 1] !== "0") dispatch(addExpression("0"));
        break;
      case "=":
        try {
          dispatch(addExpression(calctulateExpression(this.getExpression())));
          dispatch(addHistory(this.getExpression()));
          break;
        } catch (e) {
          dispatch(addExpression(e.message));
        }
        break;
      default:
        if (!this.getExpression().includes("Error")) {
          validateExpression(e.target.value, this.getExpression(), dispatch);
        } else {
          validateExpression(e.target.value, "", dispatch);
        }
        break;
    }
  };
  render() {
    return <Keypad handleClick={this.handleClick} />;
  }
}
function mapStateToProps(state) {
  return {
    expression: state.expression,
  };
}
export default connect(mapStateToProps)(KeypadContainer);
