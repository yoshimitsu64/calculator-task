import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      reason: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error) {
    return { reason: error };
  }
  render() {
    if (this.state.hasError) {
      return <h1>{this.state.reason}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
