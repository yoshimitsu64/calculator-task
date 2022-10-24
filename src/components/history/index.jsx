import PropTypes from "prop-types";
import {
  StyledHistory,
  StyledHistoryContainer,
  StyledHistoryItem,
  StyledHistoryTitle,
} from "./styled";

function History(props) {
  return (
    <StyledHistoryContainer>
      <StyledHistory>
        <StyledHistoryTitle>History</StyledHistoryTitle>
        {props.history?.map((item, index) => (
          <StyledHistoryItem key={index}>{item}</StyledHistoryItem>
        ))}
      </StyledHistory>
    </StyledHistoryContainer>
  );
}
History.propType = {
  history: PropTypes.array,
};
export default History;
