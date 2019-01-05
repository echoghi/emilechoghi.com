import React from 'react';
import { NotFound } from './styles';

class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    render() {
        if (this.state.hasError) {
            // render fallback ui
            return (
                <NotFound>
                    <h1>Oops! </h1>
                    <p>💀 Something went wrong 💀</p>
                    <a href=".">Refresh page</a>
                </NotFound>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
