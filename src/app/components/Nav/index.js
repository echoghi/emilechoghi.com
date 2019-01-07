import React, { useState, memo } from 'react';
import { Nav } from './styles';
import Brand from './Brand';
import Hamburger from './Hamburger';
import { Links, Link } from './styles';

function NavBar() {
    const [open, handleMenu] = useState(false);
    // onClick={() => handleMenu(false)}
    return (
        <Nav>
            <Brand />

            <Hamburger open={open} onClick={() => handleMenu(!open)} />

            <Links open={open} role="menu">
                <Link to="/" exact>
                    Home <i className="icon-home" />
                </Link>

                <Link to="/portfolio">
                    Portfolio <i className="icon-briefcase" />
                </Link>

                <Link to="/contact">
                    Contact <i className="icon-message-square" />
                </Link>
            </Links>
        </Nav>
    );
}

export default memo(NavBar);
