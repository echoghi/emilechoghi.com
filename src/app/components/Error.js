import React from 'react';

class FormError extends React.Component {
    render() {
        return (
            <div className="error">
                <div className="error__wrapper">
                    <h4 className="error__text">
                        An error occurred, please try again
                    </h4>
                    <button onClick={this.props.close} className="form-button">
                        <span className="form-button__text">Back</span>
                    </button>
                </div>
                <div className="error__overlay" />
            </div>
        );
    }
}

export default FormError;