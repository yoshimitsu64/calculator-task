import { useDispatch, useSelector } from "react-redux";
import { StyledKeypadContainer, StyledKeyboard } from "./styled";
import Button from "@components/button";
import { buttons } from "@constants/buttons";

function Keypad(props) {
  return (
    <StyledKeypadContainer>
      <StyledKeyboard>
        {buttons.map((button, index) => (
          <Button
            key={`${button} + ${index}`}
            button={button}
            handleClick={props.handleClick}
          />
        ))}
      </StyledKeyboard>
    </StyledKeypadContainer>
  );
}

export default Keypad;
