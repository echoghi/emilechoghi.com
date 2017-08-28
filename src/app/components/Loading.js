import React from 'react';

class Loading extends React.Component {
    render() {
        return (
            <div className="loading">
                <div className="loading__wrapper">
                    <div className="loading__spinner" />

                    <h4 className="loading__spinner--text">
                        Sending...
                    </h4>
                </div>
            </div>
        );
    }
}

export default Loading;