import PropTypes from "prop-types";

import { StyledInput, StyledSwitch, StyledToogleSwitch } from "./styled";

function Switch({ onHandleClick }) {
  return (
    <StyledToogleSwitch>
      <StyledInput type="checkbox" onClick={onHandleClick} />
      <StyledSwitch />
    </StyledToogleSwitch>
  );
}
Switch.propTypes = {
  onHandleClick: PropTypes.func,
};
export default Switch;
