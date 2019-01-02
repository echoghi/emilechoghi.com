import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LoadingWrapper } from './styles';

const Loading = () => (
    <LoadingWrapper>
        <CircularProgress size={75} style={{ color: '#269bda', margin: '0 auto' }} />
    </LoadingWrapper>
);

export default Loading;
