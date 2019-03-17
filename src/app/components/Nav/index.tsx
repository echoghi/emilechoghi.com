import React from 'react';
import Brand from './Brand';
import Hamburger from './Hamburger';
import { Nav, Links, Link, ExternalLink } from './styles';

const handleActivePath = (path: string) => {
    if (window.location.pathname === path) {
        return 'active';
    } else {
        return null;
    }
};

const NavBar = () => {
    const [open, handleMenu] = React.useState(false);
    const closeMenu = () => handleMenu(false);
    const toggleMenu = () => handleMenu(!open);

    return (
        <Nav>
            <Brand onClick={closeMenu} />

            <Hamburger open={open} onClick={toggleMenu} />

            <Links open={open} role="menu">
                <Link
                    onClick={closeMenu}
                    to="/"
                    exact={true}
                    className={handleActivePath('/')}
                    role="menuitem"
                >
                    Home <i className="icon-home" />
                </Link>

                <Link
                    onClick={closeMenu}
                    to="/portfolio"
                    className={handleActivePath('/portfolio')}
                    role="menuitem"
                >
                    Portfolio <i className="icon-briefcase" />
                </Link>

                <ExternalLink
                    onClick={closeMenu}
                    href="https://emilechoghiblog.netlify.com/"
                    className={handleActivePath('/contact')}
                    role="menuitem"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Blog <i className="icon-message-square" />
                </ExternalLink>
            </Links>
        </Nav>
    );
};

export default React.memo(NavBar);
