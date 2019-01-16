import React from 'react';
import Brand from './Brand';
import Hamburger from './Hamburger';
import { Nav, Links, Link } from './styles';

const NavBar = () => {
    const [open, handleMenu] = React.useState(false);
    const closeMenu = () => handleMenu(false);
    const toggleMenu = () => handleMenu(!open);

    return (
        <Nav>
            <Brand onClick={closeMenu} />

            <Hamburger open={open} onClick={toggleMenu} />

            <Links open={open} role="menu">
                <Link onClick={closeMenu} to="/" exact={true}>
                    Home <i className="icon-home" />
                </Link>

                <Link onClick={closeMenu} to="/portfolio">
                    Portfolio <i className="icon-briefcase" />
                </Link>

                <Link onClick={closeMenu} to="/contact">
                    Contact <i className="icon-message-square" />
                </Link>
            </Links>
        </Nav>
    );
};

export default React.memo(NavBar);
