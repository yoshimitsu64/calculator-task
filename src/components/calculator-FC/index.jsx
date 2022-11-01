import PropTypes from "prop-types"
import {
  StyledCalculatorContainer,
  StyledCalculatorDisplayContainer,
  StyledHistoryContainer,
} from "./styled"
import DisplayContainer from "@containers/FC/displayContainer"
import KeypadContainer from "@containers/FC/keypadContainer"
import HistoryContainer from "@containers/FC/historyContainer"
import ControlPanelContainer from "@containers/FC/controlPanelContainer"

function Calculator(props) {
  const { isHidden } = props

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
  )
}
Calculator.propTypes = {
  isHidden: PropTypes.bool,
}
export default Calculator
