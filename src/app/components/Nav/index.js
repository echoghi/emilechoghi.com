import React from 'react';
import Brand from './Brand';
import Menu from './Menu';
import { Nav } from './Nav.styles';

const NavBar = () => (
    <Nav>
        <Brand />
        <Menu />
    </Nav>
);

export default NavBar;
