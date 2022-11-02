import { connect } from "react-redux"
import { Component } from "react"
import PropTypes from "prop-types"

import Keypad from "@components/keypad"
import { calctulateExpression } from "@utils/calculator"
import {
  validateExpression,
  temporaryExpresssionArray,
  checkExpressionForOperators,
  containsOperator,
} from "@helpers/calculatorHelpers"
import { addHistory, addExpression, setPreviousExpression, setResult } from "@actions"

class KeypadContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      calculatedExpression: null,
      calculate: false,
      previousExpression: null,
      error: null,
    }
  }

  getExpression = () => {
    return this.props.expression
  }
  getResult = () => {
    return this.props.result
  }
  getPreviousExpression = () => {
    return this.props.previousExpression
  }

  componentDidUpdate(_, prevState) {
    if (prevState.calculate !== this.state.calculate) {
      if (prevState.calculate !== this.state.calculate) {
        this.props.dispatch(setResult(this.state.calculatedExpression))
        this.props.dispatch(addHistory(this.getExpression()))
        this.props.dispatch(addExpression(""))
      }

      if (prevState.previousExpression !== this.getPreviousExpression()) {
        try {
          this.setState({
            calculatedExpression: calctulateExpression(this.getExpression()),
          })
          this.setState({ previousExpression: this.getExpression() })
        } catch (e) {
          this.setState({ error: e.message })
        }
      }

      if (prevState.error !== this.state.error) {
        this.props.dispatch(setResult(this.state.error))
        this.setState({ error: null })
      }

      this.setState({ calculate: false })
    }
  }

  handleClick = (e) => {
    switch (e.target.value) {
      case "C":
        this.getResult()?.length !== 0 && this.props.dispatch(setResult(""))
        temporaryExpresssionArray.length = 0
        this.props.dispatch(setResult(""))
        this.props.dispatch(addExpression(""))
        break
      case "CE":
        this.getResult()?.length !== 0 && this.props.dispatch(setResult(""))
        this.props.dispatch(addExpression(this.getExpression().slice(0, -1)))
        temporaryExpresssionArray.pop()
        break
      case "=":
        try {
          if (
            checkExpressionForOperators(this.getExpression()) &&
            !containsOperator(this.getExpression()[this.getExpression().length - 1])
          ) {
            temporaryExpresssionArray.length = 0
            this.props.dispatch(setPreviousExpression(this.getExpression()))
            this.setState({ calculate: true })
            break
          }
        } catch (e) {
          this.props.dispatch(addExpression(e.message))
        }
        break
      default:
        this.getResult()?.length !== 0 && this.props.dispatch(setResult(""))
        if (!this.getExpression().includes("Error")) {
          validateExpression(e.target.value, this.getExpression(), this.props.dispatch)
        } else {
          validateExpression(e.target.value, "", this.props.dispatch)
        }
        break
    }
  }

  render() {
    return <Keypad handleClick={this.handleClick} />
  }
}

KeypadContainer.propTypes = {
  expression: PropTypes.string,
  result: PropTypes.string,
  previousExpression: PropTypes.string,
  dispatch: PropTypes.func,
}

function mapStateToProps(state) {
  return {
    expression: state.expression,
    result: state.result,
    previousExpression: state.previousExpression,
  }
}

export default connect(mapStateToProps)(KeypadContainer)
