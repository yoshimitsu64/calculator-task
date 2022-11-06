import { PureComponent } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import Calculator from "@components/calculatorCC";

class CalculatorContainer extends PureComponent {
  render() {
    const { historyVisability } = this.props;

    return <Calculator isHidden={historyVisability} />;
  }
}

CalculatorContainer.propTypes = {
  historyVisability: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    historyVisability: state.historyReducer.historyVisability,
  };
}
export default connect(mapStateToProps)(CalculatorContainer);
