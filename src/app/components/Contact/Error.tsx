import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { Button } from './styles';

interface ErrorProps {
    close: () => void;
}

const Error: React.FunctionComponent<ErrorProps> = ({ close }) => (
    <Dialog open onClose={close}>
        <DialogTitle>Oops, your message wasn't sent 😅</DialogTitle>
        <DialogContent>
            <DialogContentText>Something went wrong, please try again!</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={close}>Ok</Button>
        </DialogActions>
    </Dialog>
);

export default Error;
