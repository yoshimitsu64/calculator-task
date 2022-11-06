import PropTypes from "prop-types";

import {
  StyledCalculatorContainer,
  StyledCalculatorDisplayContainer,
  StyledHistoryContainer,
} from "@components/calculatorFC/styled";
import DisplayContainer from "@containers/classComponents/displayContainer";
import KeypadContainer from "@containers/classComponents/keypadContainer";
import HistoryContainer from "@containers/classComponents/historyContainer";
import ControlPanelContainer from "@containers/classComponents/controlPanelContainer";

function Calculator({ isHidden }) {
  return (
    <StyledCalculatorContainer>
      <StyledCalculatorDisplayContainer>
        <DisplayContainer />
        <KeypadContainer />
      </StyledCalculatorDisplayContainer>
      <ControlPanelContainer />
      <StyledHistoryContainer isHidden={isHidden}>
        <HistoryContainer />
      </StyledHistoryContainer>
    </StyledCalculatorContainer>
  );
}
Calculator.propTypes = {
  isHidden: PropTypes.bool,
};
export default Calculator;
