import React from 'react';
import { Container, Line } from './styles';

const Hamburger = ({ open, ...props }) => (
    <Container aria-expanded={open} role="button" aria-haspopup="true" open={open} {...props}>
        <Line />
        <Line />
        <Line />
    </Container>
);

export default Hamburger;
