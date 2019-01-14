import * as React from 'react';
import { LoadingWrapper, CircleWrapper, OuterCircle, InnerCircle } from './styles';

const Loading = () => (
    <LoadingWrapper>
        <CircleWrapper viewBox="0 0 200 200">
            <OuterCircle cx="100" cy="100" r="50" strokeWidth="5" />
            <InnerCircle cx="100" cy="100" r="35" strokeWidth="5" />
        </CircleWrapper>
    </LoadingWrapper>
);

export default Loading;
