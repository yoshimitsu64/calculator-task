import { connect } from "react-redux"
import { PureComponent } from "react"
import PropTypes from "prop-types"

import History from "@components/history"

class HistoryContainer extends PureComponent {
  render() {
    const { history } = this.props
    return <History history={history} />
  }
}

HistoryContainer.propTypes = {
  history: PropTypes.array
}

function mapStateToProps(state) {
  return {
    history: state.history,
  }
}

export default connect(mapStateToProps)(HistoryContainer)
