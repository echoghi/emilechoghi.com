import React, { useState, memo } from 'react';
import { Nav } from './styles';
import Brand from './Brand';
import Hamburger from './Hamburger';
import { Links, Link } from './styles';

function NavBar() {
    const [open, handleMenu] = useState(false);

    const handleActivePath = path => {
        if (window.location.pathname === path) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <Nav>
            <Brand onClick={() => handleMenu(false)} />

            <Hamburger open={open} onClick={() => handleMenu(!open)} />

            <Links open={open} role="menu">
                <Link active={handleActivePath('/')} to="/" exact onClick={() => handleMenu(false)}>
                    Home <i className="icon-home" />
                </Link>

                <Link
                    active={handleActivePath('/portfolio')}
                    to="/portfolio"
                    onClick={() => handleMenu(false)}
                >
                    Portfolio <i className="icon-briefcase" />
                </Link>

                <Link
                    active={handleActivePath('/contact')}
                    to="/contact"
                    onClick={() => handleMenu(false)}
                >
                    Contact <i className="icon-message-square" />
                </Link>
            </Links>
        </Nav>
    );
}

export default memo(NavBar);
