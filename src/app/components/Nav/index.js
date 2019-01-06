import React, { useState, memo } from 'react';
import { Nav } from './styles';
import Brand from './Brand';
import Hamburger from './Hamburger';
import { Links, Link } from './styles';

const NavBar = memo(() => {
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
                <div onClick={() => handleMenu(false)}>
                    <Link active={handleActivePath('/')} to="/" exact>
                        Home <i className="icon-home" />
                    </Link>
                </div>
                <div onClick={() => handleMenu(false)}>
                    <Link active={handleActivePath('/portfolio')} to="/portfolio">
                        Portfolio <i className="icon-briefcase" />
                    </Link>
                </div>
                <div onClick={() => handleMenu(false)}>
                    <Link active={handleActivePath('/contact')} to="/contact">
                        Contact <i className="icon-message-square" />
                    </Link>
                </div>
            </Links>
        </Nav>
    );
});

export default NavBar;
