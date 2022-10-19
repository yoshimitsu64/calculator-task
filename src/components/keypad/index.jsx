import { useEffect, useState } from "react";
import Button from "@components/button";
import { StyledKeypadContainer, StyledKeyboard } from "./styled";
import { buttons } from "@constants/buttons";
import {
  AddCommand,
  SubCommand,
  MulCommand,
  DivCommand,
  ModCommand,
  calculator,
} from "@utils/calculator";

function Keypad() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [firstOperation, setFirstOperation] = useState(null);
  const [secondOperation, setSecondOperation] = useState(null);
  const [result, setResult] = useState(0);

  const handleClick = (e) => {
    if (Number.isInteger(+e.target.value)) {
      if (!firstOperation && !secondValue) {
        setFirstValue([firstValue, e.target.value].join(""));
      } else {
        setSecondValue([secondValue, e.target.value].join(""));
      }
    } else {
      !secondValue
        ? setFirstOperation(e.target.value)
        : setSecondOperation(e.target.value);
    }
  };

  useEffect(() => {
    if (secondValue && secondOperation) {
      switch (firstOperation) {
        case "+":
          calculator.execute(new AddCommand(secondValue));
          setResult(calculator.getCurrentValue());
          break;
        case "-":
          calculator.execute(new SubCommand(secondValue));
          setResult(calculator.getCurrentValue());
          break;
        case "*":
          calculator.execute(new MulCommand(secondValue));
          setResult(calculator.getCurrentValue());
          break;
        case "/":
          calculator.execute(new DivCommand(secondValue));
          setResult(calculator.getCurrentValue());
          break;
        case "%":
          calculator.execute(new ModCommand(secondValue));
          setResult(calculator.getCurrentValue());
          break;
        case "+/-":
          setFirstOperation(!firstOperation);
          break;
        case "=":
          setFirstValue("");
          setSecondValue("");
          setFirstOperation(null);
          break;
        default:
          break;
      }
      setFirstOperation(secondOperation);
      setSecondOperation(null);
      setSecondValue("");
      setFirstValue("");
    } else if (!firstOperation && !secondOperation) {
      calculator.setCurrentValue(firstValue);
    }
  }, [firstOperation, secondOperation, firstValue, secondValue]);
  
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
