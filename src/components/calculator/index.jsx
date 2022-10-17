import Keypad from "@components/keypad";
import Display from "@components/display";
import History from "@components/history";
import { StyledCalculatorContainer } from "./styled";

function Calculator() {
  return (
    <StyledCalculatorContainer>
      <Display />
      <Keypad />
      <History />
    </StyledCalculatorContainer>
  );
}

export default Calculator;
