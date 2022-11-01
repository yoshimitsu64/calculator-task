import { Component } from "react"
import PropTypes from "prop-types"

class ErrorBoundary extends Component {
  constructor() {
    super()
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log(error.toString(), info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error</h1>
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node
}

export default ErrorBoundary
