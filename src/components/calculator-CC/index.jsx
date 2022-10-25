import PropTypes from 'prop-types'
import {
  StyledCalculatorContainer,
  StyledCalculatorDisplayContainer,
  StyledHistoryContainer,
} from "@components/calculator-FC/styled";
import DisplayContainer from '@containers/CC/display-container'
import KeypadContainer from "@containers/CC/keypad-container";
import HistoryContainer from "@containers/CC/history-container";
import ControlPanelContainer from "@containers/CC/control-panel";

function Calculator(props) {
    return (
      <StyledCalculatorContainer>
        <StyledCalculatorDisplayContainer>
          <DisplayContainer />
          <KeypadContainer />
        </StyledCalculatorDisplayContainer>
        <ControlPanelContainer />
        <StyledHistoryContainer isHidden={props.isHidden}>
          <HistoryContainer />
        </StyledHistoryContainer>
      </StyledCalculatorContainer>
    );
  }
  Calculator.propType = {
    isHidden : PropTypes.bool
  }
  export default Calculator;