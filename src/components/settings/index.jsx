import PropTypes from "prop-types";

import SwitchContainer from "@containers/functionalComponents/switchContainer";
import {
  StyledButton,
  StyledCleanHistoryContainer,
  StyledSettings,
  StyledSwitchContainer,
} from "./styled";

function Settings({ oncleanHistory }) {
  return (
    <StyledSettings>
      <h1>Settings</h1>
      <StyledSwitchContainer>
        Change theme
        <SwitchContainer />
      </StyledSwitchContainer>
      <StyledCleanHistoryContainer>
        <StyledButton onClick={oncleanHistory}>Clean history</StyledButton>
      </StyledCleanHistoryContainer>
    </StyledSettings>
  );
}
Settings.propTypes = {
  oncleanHistory: PropTypes.func,
};

export default Settings;
