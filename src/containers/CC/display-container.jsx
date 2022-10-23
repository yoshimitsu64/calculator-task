import Display from "@components/display";
import { connect } from "react-redux";

class DisplayContainer extends Component {
  render() {
    const { expression } = this.props.expression;
    return <Display expression={expression} />;
  }
}

function mapStateToProps(state) {
  return {
    expression: state.expression,
  };
}
export default connect(mapStateToProps)(DisplayContainer);
