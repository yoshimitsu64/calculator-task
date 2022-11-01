import { PureComponent } from "react"
import { connect } from "react-redux"

import PropTypes from "prop-types"

import Display from "@components/display"

class DisplayContainer extends PureComponent {
  render() {
    const { expression, result, previousExpression } = this.props
    return (
      <Display expression={expression} result={result} previousExpression={previousExpression} />
    )
  }
}

DisplayContainer.propTypes = {
  expression: PropTypes.string,
  result: PropTypes.string,
  previousExpression: PropTypes.string,
}

function mapStateToProps(state) {
  return {
    expression: state.expression,
    result: state.result,
    previousExpression: state.previousExpression,
  }
}
export default connect(mapStateToProps)(DisplayContainer)
