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

    const linkProps = {
        onClick: () => handleMenu(false)
    };

    return (
        <Nav>
            <Brand {...linkProps} />

            <Hamburger open={open} onClick={() => handleMenu(!open)} />

            <Links open={open} role="menu">
                <Link active={handleActivePath('/')} to="/" exact {...linkProps}>
                    Home <i className="icon-home" />
                </Link>

                <Link active={handleActivePath('/portfolio')} to="/portfolio" {...linkProps}>
                    Portfolio <i className="icon-briefcase" />
                </Link>

                <Link active={handleActivePath('/contact')} to="/contact" {...linkProps}>
                    Contact <i className="icon-message-square" />
                </Link>
            </Links>
        </Nav>
    );
}

export default memo(NavBar);
