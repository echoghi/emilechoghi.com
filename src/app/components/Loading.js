import React from 'react';
import Dialog, {
  DialogContent,
  DialogTitle
} from 'material-ui/Dialog';

class Loading extends React.Component {
    render() {
        return (
            <Dialog open={true} >
                <DialogTitle>Sending...</DialogTitle>
                <DialogContent>
                    <div className="loading__spinner" />
                </DialogContent>
            </Dialog>
        );
    }
}

export default Loading;