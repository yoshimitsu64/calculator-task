import { useSelector } from "react-redux";
import {
  StyledDisplayContainer,
  StyledOutput,
  StyledOutputField,
} from "./styled";

function Display() {
  const expression = useSelector(state => state?.expression)
  return (
    <StyledDisplayContainer>
      <StyledOutputField>
        <StyledOutput>
          {expression.length > 0 ? expression : 0}
        </StyledOutput>
      </StyledOutputField>
    </StyledDisplayContainer>
  );
}

export default Display;
