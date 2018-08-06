import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import ReactGA from 'react-ga';
import Button from '@material-ui/core/Button';

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
        const { close } = this.props;

        return (
            <Dialog open onClose={close}>
                <DialogTitle>
                    Oops, your message wasn't sent <i className="icon-tongue" />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>An error occurred, please try again</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={close} autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default FormError;
