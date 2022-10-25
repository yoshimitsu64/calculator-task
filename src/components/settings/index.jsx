import PropTypes from "prop-types";
import {
  StyledButton,
  StyledCleanHistoryContainer,
  StyledSettings,
  StyledSwitchContainer,
} from "./styled";
import SwitchContainer from "@containers/FC/switch-container";

function Settings(props) {
  const { cleanHistoryClick, cleanAllClick } = props;
  return (
    <StyledSettings>
      <h1>Settings</h1>
      <StyledSwitchContainer>
        Change theme
        <SwitchContainer />
      </StyledSwitchContainer>
      <StyledCleanHistoryContainer>
        <StyledButton onClick={cleanHistoryClick}>Clean history</StyledButton>
        <StyledButton onClick={cleanAllClick}>Clean all</StyledButton>
      </StyledCleanHistoryContainer>
    </StyledSettings>
  );
}
Settings.propType = {
  cleanHistoryClick: PropTypes.func,
  cleanAllClick: PropTypes.func,
};

export default Settings;
