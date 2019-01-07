import React, { useState, memo } from 'react';
import { Nav } from './styles';
import Brand from './Brand';
import Hamburger from './Hamburger';
import { Links, Link } from './styles';

function NavBar() {
    const [open, handleMenu] = useState(false);

    return (
        <Nav>
            <Brand onClick={() => handleMenu(false)} />

            <Hamburger open={open} onClick={() => handleMenu(!open)} />

            <Links open={open} role="menu">
                <Link to="/" exact onClick={() => handleMenu(false)}>
                    Home <i className="icon-home" />
                </Link>

                <Link to="/portfolio" onClick={() => handleMenu(false)}>
                    Portfolio <i className="icon-briefcase" />
                </Link>

                <Link to="/contact" onClick={() => handleMenu(false)}>
                    Contact <i className="icon-message-square" />
                </Link>
            </Links>
        </Nav>
    );
}

export default memo(NavBar);
