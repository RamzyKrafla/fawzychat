import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    // console.error(error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--bg-primary)",
            color: "var(--text-primary)",
            fontFamily:
              "JetBrains Mono, Fira Code, Consolas, Monaco, Courier New, monospace",
            textAlign: "center",
          }}
        >
          <h1>Something went wrong.</h1>
          <p>
            Sorry, the app failed to load. This is usually fixed by reloading
            the page.
          </p>
          <button
            onClick={this.handleReload}
            style={{
              marginTop: 24,
              padding: "0.75rem 2rem",
              fontSize: "1rem",
              borderRadius: 8,
              border: "none",
              background: "var(--accent-color)",
              color: "var(--bg-primary)",
              cursor: "pointer",
              fontFamily:
                "JetBrains Mono, Fira Code, Consolas, Monaco, Courier New, monospace",
              fontWeight: 600,
            }}
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
