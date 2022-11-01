import PropTypes from "prop-types"

import { StyledInput, StyledSwitch, StyledToogleSwitch } from "./styled"

function Switch(props) {
  const { handleClick } = props

  return (
    <StyledToogleSwitch>
      <StyledInput type="checkbox" onClick={handleClick} />
      <StyledSwitch />
    </StyledToogleSwitch>
  )
}
Switch.propTypes = {
  handleClick: PropTypes.func,
}
export default Switch
