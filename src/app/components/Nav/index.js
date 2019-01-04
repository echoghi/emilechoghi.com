import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavBrand, Nav } from './styles';
import Hamburger from './Hamburger';
import { Links, Link } from './styles';

const handleActivePath = path => {
    if (window.location.pathname === path) {
        return 'active';
    } else {
        return null;
    }
};

const NavBar = () => {
    const [open, handleMenu] = useState(false);

    return (
        <Nav>
            <NavBrand onClick={() => handleMenu(false)}>
                <NavLink to="/">
                    <i className="icon-brand" />
                </NavLink>
            </NavBrand>
            <Hamburger open={open} onClick={() => handleMenu(!open)} />
            <Links open={open} role="menu">
                <Link
                    onClick={() => handleMenu(false)}
                    className={handleActivePath('/')}
                    to="/"
                    exact
                >
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
        </Nav>
    );
};

export default NavBar;
