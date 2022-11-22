import { memo } from "react";
import PropTypes from "prop-types";

import {
  StyledDisplayContainer,
  StyledOutput,
  StyledOutputField,
  StyledPreviousExpression,
} from "./styled";

function Display({ expression, result, previousExpression }) {
  console.log(result);
  return (
    <StyledDisplayContainer>
      <StyledOutputField>
        <StyledPreviousExpression>{previousExpression}</StyledPreviousExpression>
        <StyledOutput>
          <div data-cypress="output" value={expression}>
            {result?.length !== 0 ? result : expression}
          </div>
        </StyledOutput>
      </StyledOutputField>
    </StyledDisplayContainer>
  );
}
Display.propTypes = {
  expression: PropTypes.string,
  result: PropTypes.string,
  previousExpression: PropTypes.string,
};
export default memo(Display);
