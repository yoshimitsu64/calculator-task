import PropTypes from 'prop-types'
import {
  StyledCalculatorContainer,
  StyledCalculatorDisplayContainer,
  StyledHistoryContainer,
} from "./styled";
import DisplayContainer from "@containers/FC/display-container";
import KeypadContainer from "@containers/FC/keypad-container";
import HistoryContainer from "@containers/FC/history-container";
import ControlPanelContainer from "@containers/FC/control-panel-container";

function Calculator(props) {
  return (
    <StyledCalculatorContainer>
      <StyledCalculatorDisplayContainer>
        <DisplayContainer />
        <KeypadContainer />
      </StyledCalculatorDisplayContainer>
      <ControlPanelContainer />
      <StyledHistoryContainer isHidden={props.isHidden} data-cypress="historyContainer">
        <HistoryContainer />
      </StyledHistoryContainer>
    </StyledCalculatorContainer>
  );
}
Calculator.propType = {
  isHidden : PropTypes.bool
}
export default Calculator;
