import PropTypes from "prop-types"

import {
  StyledHistory,
  StyledHistoryContainer,
  StyledHistoryItem,
  StyledHistoryTitle,
} from "./styled"

function History(props) {
  const { history } = props

  return (
    <StyledHistoryContainer>
      <StyledHistoryTitle>History</StyledHistoryTitle>
      <StyledHistory data-cypress="historyList">
        {history?.map((item, index) => (
          <StyledHistoryItem key={`${item} + ${index}`}>{item}</StyledHistoryItem>
        ))}
      </StyledHistory>
    </StyledHistoryContainer>
  )
}
History.propTypes = {
  history: PropTypes.array,
}
export default History
