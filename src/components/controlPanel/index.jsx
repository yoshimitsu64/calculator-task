import PropTypes from "prop-types";

import { StyledControlPanel, StyledItem } from "./styled";

function ControlPanel({ onHideHistory, historyVisability }) {
  return (
    <StyledControlPanel>
      <StyledItem onClick={onHideHistory}>
        {historyVisability ? "Hide history" : "Show history"}
      </StyledItem>
    </StyledControlPanel>
  );
}
ControlPanel.propTypes = {
  onHideHistory: PropTypes.func,
  historyVisability: PropTypes.bool,
};
export default ControlPanel;
