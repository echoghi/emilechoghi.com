import * as React from 'react';
import { Container, Line } from './styles';

interface Hamburger {
    open: boolean;
    onClick: () => void;
}

const Hamburger: React.FunctionComponent<Hamburger> = ({ open, ...props }) => (
    <Container aria-expanded={open} role="button" aria-haspopup="true" open={open} {...props}>
        <Line />
        <Line />
        <Line />
    </Container>
);

export default Hamburger;
