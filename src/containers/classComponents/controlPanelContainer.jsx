import { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import ControlPanel from "@components/controlPanel";

import { setHistoryVisability } from "@actions/historyActions";

class ControlPanelContainer extends Component {
  getHistoryVisability = () => {
    const { historyVisability } = this.props;

    return historyVisability;
  };

  onHideHistory = () => {
    const { hideHistory } = this.props;
    hideHistory(!this.getHistoryVisability());
  };

  render() {
    return (
      <ControlPanel
        onHideHistory={this.onHideHistory}
        historyVisability={this.getHistoryVisability()}
      />
    );
  }
}

ControlPanelContainer.propTypes = {
  historyVisability: PropTypes.bool,
  hideHistory: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    historyVisability: state.historyReducer.historyVisability,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    hideHistory: (options) => dispatch(setHistoryVisability(options)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanelContainer);
