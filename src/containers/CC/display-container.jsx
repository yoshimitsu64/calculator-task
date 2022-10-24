import Display from "@components/display";
import { Component } from "react";
import { connect } from "react-redux";

class DisplayContainer extends Component {
  render() {
    const { expression } = this.props;
    return <Display expression={expression} />;
  }
}

function mapStateToProps(state) {
  return {
    expression: state.expression,
  };
}
export default connect(mapStateToProps)(DisplayContainer);
