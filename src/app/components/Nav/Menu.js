import React, { Fragment } from 'react';
import Hamburger from './Hamburger';
import { Links, Link } from './Nav.styles';

const handleActivePath = path => {
    if (window.location.pathname === path) {
        return 'active';
    } else {
        return null;
    }
};

const Menu = ({ open, handleMenu }) => (
    <Fragment>
        <Hamburger open={open} onClick={() => handleMenu(!open)} />
        <Links open={open} role="menu">
            <Link onClick={() => handleMenu(false)} className={handleActivePath('/')} to="/" exact>
                Home <i className="icon-home" />
            </Link>
            <Link
                onClick={() => handleMenu(false)}
                className={handleActivePath('/portfolio')}
                to="/portfolio"
            >
                Portfolio <i className="icon-briefcase" />
            </Link>
            <Link
                onClick={() => handleMenu(false)}
                className={handleActivePath('/contact')}
                to="/contact"
            >
                Contact <i className="icon-message-square" />
            </Link>
        </Links>
    </Fragment>
);

export default Menu;
