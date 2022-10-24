import History from "@components/history";
import { Component } from "react";
import { connect } from "react-redux";

class HistoryContainer extends Component {
  render() {
    const { history } = this.props;
    return <History history={history} />;
  }
}

function mapStateToProps(state) {
  return {
    history: state.history,
  };
}

export default connect(mapStateToProps)(HistoryContainer);
