import * as React from 'react';
import Brand from './Brand';
import Hamburger from './Hamburger';
import { Nav, Links, Link } from './styles';

const NavBar = () => {
    const [open, handleMenu] = React.useState(false);

    return (
        <Nav>
            <Brand onClick={() => handleMenu(false)} />

            <Hamburger open={open} onClick={() => handleMenu(!open)} />

            <Links open={open} role="menu">
                <Link onClick={() => handleMenu(false)} to="/" exact>
                    Home <i className="icon-home" />
                </Link>

                <Link onClick={() => handleMenu(false)} to="/portfolio">
                    Portfolio <i className="icon-briefcase" />
                </Link>

                <Link onClick={() => handleMenu(false)} to="/contact">
                    Contact <i className="icon-message-square" />
                </Link>
            </Links>
        </Nav>
    );
};

export default React.memo(NavBar);
