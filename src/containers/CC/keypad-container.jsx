import Keypad from "@components/keypad";
import { calctulateExpression } from "@utils/calculator";
import { validator } from "@utils/calculator-helpers";
import { addHistory } from "@store/actions";
import { addExpression } from "@store/actions";
import { connect } from "react-redux";
import { Component } from "react";

class KeypadContainer extends Component {
  getExpression = () => {
    return this.props.expression;
  };
  handleClick = (e) => {
    const { dispatch } = this.props;
    switch (e.target.value) {
      case "C":
        dispatch(addExpression(""));
        break;
      case "CE":
        dispatch(addExpression(this.getExpression().slice(0, -1)));
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
        validator(e.target.value, this.getExpression(), dispatch);
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
