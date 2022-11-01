import PropTypes from "prop-types"

import {
  StyledCalculatorContainer,
  StyledCalculatorDisplayContainer,
  StyledHistoryContainer,
} from "@components/calculator-FC/styled"
import DisplayContainer from "@containers/CC/displayContainer"
import KeypadContainer from "@containers/CC/keypadContainer"
import HistoryContainer from "@containers/CC/historyContainer"
import ControlPanelContainer from "@containers/CC/controlPanelContainer"

function Calculator(props) {
  const { isHidden } = props

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
  )
}
Calculator.propTypes = {
  isHidden: PropTypes.bool,
}
export default Calculator
