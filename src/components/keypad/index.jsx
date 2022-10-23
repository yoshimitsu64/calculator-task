import { useEffect, useState } from "react";
import { StyledKeypadContainer, StyledKeyboard } from "./styled";
import Button from "@components/button";
import { buttons } from "@constants/buttons";
import { calctulateExpression } from "@utils/calculator";
import { validator } from "@utils/calculator-helpers";
function Keypad() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    switch (e.target.value) {
      case "C":
        break;
      case "CE":
        break;
      case "=":
        setResult(calctulateExpression(expression));
        break;
      default:
        validator(e.target.value, expression, setExpression);
    }
  };
  useEffect(() => {
    setExpression(result);
  }, [result]);
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
