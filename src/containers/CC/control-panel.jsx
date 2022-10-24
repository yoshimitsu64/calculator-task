import ControlPanel from "@components/control-panel";
import {
  addExpression,
  cleanHistory,
  setHistoryVisability,
} from "@store/actions";
import { Component } from "react";
import { connect } from "react-redux";

class ControlPanelContainer extends Component {
  getHistoryVisability = () => {
    return this.props.historyVisability;
  };
  hideHistoryClick = () => {
    this.props.hideHistoryClick(!this.getHistoryVisability());
  };
  cleanHistoryClick = () => {
    this.props.cleanHistoryClick();
  };
  cleanAllClick = () => {
    this.props.cleanAllClick();
  };
  render() {
    return (
      <ControlPanel
        hideHistoryClick={this.hideHistoryClick}
        cleanHistoryClick={this.cleanHistoryClick}
        cleanAllClick={this.cleanAllClick}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    historyVisability: state.historyVisability,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    hideHistoryClick: (options) => dispatch(setHistoryVisability(options)),
    cleanHistoryClick: () => dispatch(cleanHistory()),
    cleanAllClick: () => {
      dispatch(cleanHistory());
      dispatch(addExpression(""));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanelContainer);
