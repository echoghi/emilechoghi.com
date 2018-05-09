import React from 'react';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';
import ReactGA from 'react-ga';
import Button from 'material-ui/Button';

class FormError extends React.PureComponent {
    componentDidMount() {
        if (NODE_ENV === 'production') {
            ReactGA.event({
                category: 'Form Error',
                action: 'Form Submission Error',
                label: 'Error Modal'
            });
        }
    }

    render() {
        return (
            <Dialog open onClose={this.props.close}>
                <DialogTitle className="error__title">
                    Oops, your message wasn't sent <i className="icon-tongue" />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>An error occurred, please try again</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.close}>Ok</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default FormError;
