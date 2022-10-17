import PropTypes from "prop-types";
import { StyledButton } from "./styled";

function Button({ button, handleClick }) {
  return (
    <StyledButton onClick={handleClick} value={button}>
      {button}
    </StyledButton>
  );
}

Button.propType = {
  button: PropTypes.string,
};

export default Button;
