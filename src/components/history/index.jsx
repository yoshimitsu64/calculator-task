import { useSelector } from "react-redux";
import { StyledHistoryContainer, StyledHistoryItem, StyledHistoryTitle } from "./styled";

function History() {
  const history = useSelector((state) => state?.history);
  return (
    <StyledHistoryContainer>
      <StyledHistoryTitle>History</StyledHistoryTitle>
      {history.map((item,index) => (
        <StyledHistoryItem key={index}>
          {item}
        </StyledHistoryItem>
      ))}
    </StyledHistoryContainer>
  );
}

export default History;
