/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React from 'react';

export class ReactErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React down:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
          <div style={{ padding: 20, background: '#fee', color: '#c00', border: '1px solid #c00' }}>
              <h2>Something went wrong with React component. 💥</h2>
              <button onClick={() => this.setState({ hasError: false })}>Try again</button>
          </div>
      );
    }

    return this.props.children; 
  }
}