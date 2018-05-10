import React from 'react';
import Dialog, { DialogContent, DialogTitle } from 'material-ui/Dialog';
import Lottie from 'react-lottie';
import * as loadingAnimation from '../assets/animations/loading.json';

class Loading extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: true,
            animationData: loadingAnimation,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
                progressiveLoad: true
            }
        };

        return (
            <Dialog open>
                <DialogTitle>Sending...</DialogTitle>
                <DialogContent>
                    <Lottie options={options} height={100} width={100} />
                </DialogContent>
            </Dialog>
        );
    }
}

export default Loading;
