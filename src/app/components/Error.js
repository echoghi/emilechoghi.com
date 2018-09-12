import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import styled from 'styled-components';

const Button = styled.div`
    font-family: 'Varela Round', serif;
    display: inline-block;
    font-size: 16px;
    padding: 8px 16px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    text-decoration: none;
    border-radius: 2px;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    outline: none;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
`;

const Error = ({ close }) => (
    <Dialog open onClose={close}>
        <DialogTitle>
            Oops, your message wasn't sent <i className="icon-tongue" />
        </DialogTitle>
        <DialogContent>
            <DialogContentText>An error occurred, please try again</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={close}>Ok</Button>
        </DialogActions>
    </Dialog>
);

export default Error;
