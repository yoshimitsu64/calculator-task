import PropTypes from "prop-types";

import Button from "@components/button";
import { buttons } from "@constants/buttons";
import { StyledKeypadContainer, StyledKeyboard } from "./styled";

function Keypad({ onHandleClick }) {
  return (
    <StyledKeypadContainer>
      <StyledKeyboard>
        {buttons?.map((button, index) => (
          <Button key={`${button} + ${index}`} button={button} onHandleClick={onHandleClick} />
        ))}
      </StyledKeyboard>
    </StyledKeypadContainer>
  );
}

Keypad.propTypes = {
  onHandleClick: PropTypes.func,
};

export default Keypad;
