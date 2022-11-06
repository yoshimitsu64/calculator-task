import PropTypes from "prop-types";

import { StyledButton } from "./styled";

function Button({ button, onHandleClick }) {
  return (
    <StyledButton onClick={onHandleClick} data-cypress={button} value={button}>
      {button}
    </StyledButton>
  );
}
Button.propTypes = {
  button: PropTypes.string,
  onHandleClick: PropTypes.func,
};

export default Button;
