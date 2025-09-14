'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Log error to monitoring service
    if (typeof window !== 'undefined') {
      // You can integrate with error monitoring services like Sentry here
      console.error('Error details:', {
        error: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-boundary">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <div className="error-content">
                  <i className="fas fa-exclamation-triangle text-warning mb-3" style={{ fontSize: '3rem' }}></i>
                  <h2 className="text-dark mb-3">Đã xảy ra lỗi</h2>
                  <p className="text-secondary mb-4">
                    Xin lỗi, đã có lỗi xảy ra khi tải trang. Vui lòng thử lại sau.
                  </p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      this.setState({ hasError: false, error: undefined });
                      window.location.reload();
                    }}
                  >
                    <i className="fas fa-refresh me-2"></i>
                    Tải lại trang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
