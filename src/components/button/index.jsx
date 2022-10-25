import PropTypes from "prop-types";
import { StyledButton } from "./styled";

function Button({ button, handleClick }) {
  return (
    <StyledButton onClick={handleClick} data-cypress={button} value={button}>
      {button}
    </StyledButton>
  );
}
Button.propType = {
  button: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
