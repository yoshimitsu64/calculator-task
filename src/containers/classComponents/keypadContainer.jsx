import { connect } from "react-redux";
import { Component } from "react";

import PropTypes from "prop-types";
import { toast } from "yoshimitsu-toast-library";

import Keypad from "@components/keypad";

import { calctulateExpression } from "@utils/calculator";
import {
  validateExpression,
  temporaryExpresssionArray,
  checkExpressionForOperators,
  containsOperator,
} from "@helpers/calculatorHelpers";

import { addExpression, setPreviousExpression, setResult } from "@actions/calculatorActions";
import { addHistory } from "@actions/historyActions";

class KeypadContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatedExpression: null,
      calculate: false,
      previousExpression: null,
      error: null,
    };
  }

  getExpression = () => {
    return this.props.expression;
  };
  getResult = () => {
    return this.props.result;
  };
  getPreviousExpression = () => {
    return this.props.previousExpression;
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.result !== this.getResult()) {
      if (this.getResult()?.length === 0) {
        this.props.dispatch(setPreviousExpression(""));
      }
    }
    if (prevState.calculatedExpression !== this.state.calculatedExpression) {
      toast.createToast("success", `Result is ${this.state.calculatedExpression}`, {
        position: "top-center",
        duration: 10,
        animation: "bounce",
        topic: "Result",
      });
    }

    if (prevState.calculate !== this.state.calculate) {
      if (prevState.calculate !== this.state.calculate) {
        this.props.dispatch(setResult(this.state.calculatedExpression));
        this.props.dispatch(addHistory(this.getExpression()));
        this.props.dispatch(addExpression(""));
      }

      if (prevState.previousExpression !== this.getPreviousExpression()) {
        try {
          this.setState({
            calculatedExpression: calctulateExpression(this.getExpression()),
          });
          this.setState({ previousExpression: this.getExpression() });
        } catch (e) {
          this.setState({ error: e.message });
        }
      }

      if (prevState.error !== this.state.error) {
        this.props.dispatch(setResult(this.state.error));
        this.setState({ error: null });
        toast.createToast("error", "Invalid expression", {
          position: "top-center",
          duration: 10,
          animation: "bounce",
        });
      }

      this.setState({ calculate: false });
    }
  }

  onHandleClick = (e) => {
    switch (e.target.value) {
      case "C":
        this.getResult()?.length !== 0 && this.props.dispatch(setResult(""));
        temporaryExpresssionArray.length = 0;
        this.props.dispatch(setResult(""));
        this.props.dispatch(addExpression(""));
        toast.createToast("info", "You've just deleted expression", {
          position: "top-left",
          duration: 10,
          animation: "bounce",
          topic: "Expression cleaner",
        });
        break;
      case "CE":
        this.getResult()?.length !== 0 && this.props.dispatch(setResult(""));
        this.props.dispatch(addExpression(this.getExpression().slice(0, -1)));
        temporaryExpresssionArray.pop();
        break;
      case "=":
        try {
          if (
            checkExpressionForOperators(this.getExpression()) &&
            !containsOperator(this.getExpression()[this.getExpression().length - 1])
          ) {
            temporaryExpresssionArray.length = 0;
            this.props.dispatch(setPreviousExpression(this.getExpression()));
            this.setState({ calculate: true });
            break;
          }
        } catch (e) {
          this.props.dispatch(addExpression(e.message));
        }
        break;
      default:
        this.getResult()?.length !== 0 && this.props.dispatch(setResult(""));
        if (!this.getExpression().includes("Error")) {
          validateExpression(e.target.value, this.getExpression(), this.props.dispatch);
        } else {
          validateExpression(e.target.value, "", this.props.dispatch);
        }
        break;
    }
  };

  render() {
    return <Keypad onHandleClick={this.onHandleClick} />;
  }
}

KeypadContainer.propTypes = {
  expression: PropTypes.string,
  result: PropTypes.string,
  previousExpression: PropTypes.string,
  dispatch: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    expression: state.calculatorReducer.expression,
    result: state.calculatorReducer.result,
    previousExpression: state.calculatorReducer.previousExpression,
  };
}

export default connect(mapStateToProps)(KeypadContainer);
