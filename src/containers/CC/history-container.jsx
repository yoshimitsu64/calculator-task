import History from "@components/history";
import { connect } from "react-redux";

class HistoryContainer extends Component {
  render() {
    const { history } = this.props.history;
    return <History history={history} />;
  }
}

function mapStateToProps(state) {
  return {
    history: state.history,
  };
}

export default connect(mapStateToProps)(HistoryContainer);
