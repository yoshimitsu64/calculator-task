import PropTypes from "prop-types"

import SwitchContainer from "@containers/FC/switchContainer"
import {
  StyledButton,
  StyledCleanHistoryContainer,
  StyledSettings,
  StyledSwitchContainer,
} from "./styled"

function Settings(props) {
  const { cleanHistoryClick } = props
  return (
    <StyledSettings>
      <h1>Settings</h1>
      <StyledSwitchContainer>
        Change theme
        <SwitchContainer />
      </StyledSwitchContainer>
      <StyledCleanHistoryContainer>
        <StyledButton onClick={cleanHistoryClick}>Clean history</StyledButton>
      </StyledCleanHistoryContainer>
    </StyledSettings>
  )
}
Settings.propTypes = {
  cleanHistoryClick: PropTypes.func,
}

export default Settings
