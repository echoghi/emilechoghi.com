import React, { useState } from 'react';
import Brand from './Brand';
import Menu from './Menu';
import { Nav } from './Nav.styles';

const NavBar = () => {
    const [open, handleMenu] = useState(false);

    return (
        <Nav>
            <Brand handleMenu={handleMenu} />
            <Menu open={open} handleMenu={handleMenu} />
        </Nav>
    );
};

export default NavBar;
