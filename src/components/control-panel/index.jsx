import PropTypes from "prop-types";
import { StyledControlPanel, StyledItem } from "./styled";

function ControlPanel(props) {
  const { hideHistoryClick, cleanHistoryClick, cleanAllClick } = props;
  return (
    <StyledControlPanel>
      <StyledItem onClick={hideHistoryClick}>Show history</StyledItem>
      <StyledItem onClick={cleanHistoryClick}>Clean history</StyledItem>
      <StyledItem onClick={cleanAllClick}>Clean all</StyledItem>
    </StyledControlPanel>
  );
}
ControlPanel.propType = {
  hideHistoryClick: PropTypes.func,
  cleanHistoryClick: PropTypes.func,
  cleanAllClick: PropTypes.func,
};
export default ControlPanel;
