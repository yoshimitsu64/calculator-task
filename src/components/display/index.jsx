import PropTypes from "prop-types";
import {
  StyledDisplayContainer,
  StyledOutput,
  StyledOutputField,
} from "./styled";

function Display(props) {
  return (
    <StyledDisplayContainer>
      <StyledOutputField>
        <StyledOutput>
          {props.expression.length > 0 ? props.expression : 0}
        </StyledOutput>
      </StyledOutputField>
    </StyledDisplayContainer>
  );
}
Display.propType = {
  expression: PropTypes.string,
};
export default Display;
