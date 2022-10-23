import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledKeypadContainer, StyledKeyboard } from "./styled";
import Button from "@components/button";
import { buttons } from "@constants/buttons";
import { calctulateExpression } from "@utils/calculator";
import { validator } from "@utils/calculator-helpers";
import { addHistory } from "@store/actions";
import { addExpression } from "../../store/actions";

function Keypad() {
  const dispatch = useDispatch();
  const expression = useSelector((state) => state?.expression);

  const handleClick = (e) => {
    switch (e.target.value) {
      case "C":
        dispatch(addExpression(""));
        break;
      case "CE":
        dispatch(addExpression(expression.slice(0, -1)));
        break;
      case "=":
        dispatch(addExpression(calctulateExpression(expression)));
        dispatch(addHistory(expression));
        break;
      default:
        validator(e.target.value, expression, dispatch);
    }
  };

  return (
    <StyledKeypadContainer>
      <StyledKeyboard>
        {buttons.map((button, index) => (
          <Button
            key={`${button} + ${index}`}
            button={button}
            handleClick={handleClick}
          />
        ))}
      </StyledKeyboard>
    </StyledKeypadContainer>
  );
}

export default Keypad;
