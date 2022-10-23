import PropTypes from "prop-types";
import { StyledHistory, StyledHistoryItem, StyledHistoryTitle } from "./styled";

function History(props) {
  return (
    <StyledHistory>
      <StyledHistoryTitle>History</StyledHistoryTitle>
      {props.history.map((item, index) => (
        <StyledHistoryItem key={index}>{item}</StyledHistoryItem>
      ))}
    </StyledHistory>
  );
}
History.propType = {
  history: PropTypes.array,
};
export default History;
