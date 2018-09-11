import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
    position: fixed;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    width: 100px;
    height: 100px;
`;

const Loading = () => (
    <LoadingWrapper>
        <CircularProgress size={75} style={{ color: '#269bda', margin: '0 auto' }} />
    </LoadingWrapper>
);

export default Loading;
