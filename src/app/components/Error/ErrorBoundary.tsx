import React from 'react';
import { NotFound } from './styles';

interface Props {
    children: React.ReactNode;
}

class ErrorBoundary extends React.Component<Props> {
    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    state: { hasError: boolean } = { hasError: false };

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
