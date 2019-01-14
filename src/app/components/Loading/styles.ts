import styled, { keyframes } from 'styled-components';
import theme from '../../theme';

const CounterClockWise = keyframes`
  from {
    transform: rotate(0) 
  }
  to {
    transform: rotate(360);
  }
`;

const ClockWise = keyframes`
  from {
    transform: rotate(360) 
  }
  to {
    transform: rotate(0);
  }
`;

const CircleWrapper = styled.svg`
    height: 200px;
    width: 200px;

    circle {
        stroke-dasharray: 339.292 339.292;
        stroke-linecap: round;
        stroke: ${theme.colors.blue};
        fill: none;
        transform: rotate(-360deg);
        transform-origin: 50% 50%;
    }
`;

const OuterCircle = styled.circle`
    stroke-dashoffset: 100;
    animation: ${CounterClockWise} 2s infinite linear;
`;

const InnerCircle = styled.circle`
    stroke-dashoffset: 225;
    animation: ${ClockWise} 1s infinite linear;
`;

const LoadingWrapper = styled.div`
    position: fixed;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    width: 200px;
    height: 200px;
`;

export { LoadingWrapper, CircleWrapper, InnerCircle, OuterCircle };
