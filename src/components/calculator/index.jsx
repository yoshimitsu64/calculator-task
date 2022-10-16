import ControlPanel from "@components/control-panel";
import Display from "@components/display";
import History from "@components/history";
import { StyledCalculatorContainer } from "./styled";

function Calculator() {
  return (
    <StyledCalculatorContainer>
      <Display />
      <ControlPanel />
      <History />
    </StyledCalculatorContainer>
  );
}

export default Calculator;
