import PropTypes from "prop-types"

import { StyledControlPanel, StyledItem } from "./styled"

function ControlPanel(props) {
  const { hideHistoryClick } = props

  return (
    <StyledControlPanel>
      <StyledItem onClick={hideHistoryClick}>Show history</StyledItem>
    </StyledControlPanel>
  )
}
ControlPanel.propTypes = {
  hideHistoryClick: PropTypes.func,
}
export default ControlPanel
