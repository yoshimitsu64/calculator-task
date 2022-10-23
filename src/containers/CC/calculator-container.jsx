import { Component } from "react";
import Calculator from "@components/calculator";
import { connect } from "react-redux";

class CalculatorContainer extends Component {
  render() {
    const { historyVisability } = this.props;
    return <Calculator isHidden={historyVisability} />;
  }
}
function mapStateToProps(state) {
  return {
    historyVisability: state.historyVisability,
  };
}
export default connect(mapStateToProps)(CalculatorContainer);
