import { Component } from "react";

import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({ error: error.toString() });
    console.log(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.error}</h1>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
