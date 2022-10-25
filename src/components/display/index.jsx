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
          <div data-cypress="output" value={props.expression}>{props.expression}</div>
        </StyledOutput>
      </StyledOutputField>
    </StyledDisplayContainer>
  );
}
Display.propType = {
  expression: PropTypes.string,
};
export default Display;
