import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Button } from './styles';

const Success = ({ close }) => (
    <Dialog open onClose={close}>
        <DialogTitle>Thanks for reaching out! 👍</DialogTitle>
        <DialogContent>
            <DialogContentText>
                You should hear back from me within a day unless I'm on holiday or super busy.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={close}>Ok</Button>
        </DialogActions>
    </Dialog>
);

export default Success;
