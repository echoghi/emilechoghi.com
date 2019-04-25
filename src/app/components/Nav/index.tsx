import React, { useState } from 'react';
import Brand from './Brand';
import Hamburger from './Hamburger';
import { Nav, Links, Link, ExternalLink } from './styles';
import { withRouter, RouteComponentProps } from 'react-router';

const NavBar = ({ history }: RouteComponentProps) => {
    const [open, handleMenu] = useState(false);
    const closeMenu = () => handleMenu(false);
    const toggleMenu = () => handleMenu(!open);

    const handleActivePath = (path: string) => {
        if (history.location.pathname === path) {
            return 'active';
        } else {
            return null;
        }
    };

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

                <ExternalLink onClick={closeMenu} href="https://emilechoghi.com/" role="menuitem">
                    v3 <i className="icon-message-square" />
                </ExternalLink>
            </Links>
        </Nav>
    );
};

export default withRouter(NavBar);
