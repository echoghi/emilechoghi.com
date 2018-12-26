import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    display: none;
    top: 2px;
    right: 0;
    width: 30px;
    padding: 20px 25px;

    @media (max-width: 767px) {
        display: block;
        z-index: 2;
    }

    div {
        &:first-child {
            top: ${props => (props.open ? '10.5px' : null)};
            transform: ${props => (props.open ? 'rotate(315deg)' : 'none')};
        }

        &:nth-child(2) {
            display: ${props => (props.open ? 'none' : 'block')};
            width: 65%;
        }

        &:last-child {
            top: ${props => (props.open ? '10.5px' : null)};
            transform: ${props => (props.open ? 'rotate(-315deg) translateY(-14px)' : 'none')};
            right: ${props => (props.open ? '10px' : null)};
        }
    }
`;

const Line = styled.div`
    position: relative;
    margin: 7px 0;
    height: 3px;
    background: #269bda;
    border-radius: 5px;
    transition: all 200ms ease-out;
`;

const Hamburger = ({ open, ...props }) => (
    <Container aria-expanded={open} role="button" aria-haspopup="true" open={open} {...props}>
        <Line />
        <Line />
        <Line />
    </Container>
);

export default Hamburger;
