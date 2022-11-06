import PropTypes from "prop-types";

import DisplayContainer from "@containers/functionalComponents/displayContainer";
import KeypadContainer from "@containers/functionalComponents/keypadContainer";
import HistoryContainer from "@containers/functionalComponents/historyContainer";
import ControlPanelContainer from "@containers/functionalComponents/controlPanelContainer";
import {
  StyledCalculatorContainer,
  StyledCalculatorDisplayContainer,
  StyledHistoryContainer,
} from "./styled";

function Calculator({ isHidden }) {
  return (
    <StyledCalculatorContainer>
      <StyledCalculatorDisplayContainer>
        <DisplayContainer />
        <KeypadContainer />
      </StyledCalculatorDisplayContainer>
      <ControlPanelContainer />
      <StyledHistoryContainer isHidden={isHidden} data-cypress="historyContainer">
        <HistoryContainer />
      </StyledHistoryContainer>
    </StyledCalculatorContainer>
  );
}
Calculator.propTypes = {
  isHidden: PropTypes.bool,
};
export default Calculator;
