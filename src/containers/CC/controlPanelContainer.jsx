import { Component } from "react"
import { connect } from "react-redux"

import PropTypes from "prop-types";

import ControlPanel from "@components/control-panel"
import { setHistoryVisability } from "@actions"

class ControlPanelContainer extends Component {
  getHistoryVisability = () => {
    return this.props.historyVisability
  }
  hideHistoryClick = () => {
    this.props.hideHistoryClick(!this.getHistoryVisability())
  }

  render() {
    return <ControlPanel hideHistoryClick={this.hideHistoryClick} />
  }
}

ControlPanelContainer.propTypes = {
  historyVisability:PropTypes.bool,
  hideHistoryClick: PropTypes.func
}

function mapStateToProps(state) {
  return {
    historyVisability: state.historyVisability,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    hideHistoryClick: (options) => dispatch(setHistoryVisability(options)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanelContainer)
