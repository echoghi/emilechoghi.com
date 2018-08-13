import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
    font-family: 'Varela Round', serif;
    background: #fff;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    width: 100%;
    box-shadow: none;
    border-bottom: 1px solid rgb(219, 219, 219);
    z-index: 99;

    @media (max-width: 1023px) {
        border-bottom: 0;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    }
`;

class NavBar extends React.Component {
    state = {
        menuOpen: false
    };

    handleMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen });
    };

    handleHamburgerClass() {
        let className;

        if (this.state.menuOpen) {
            className = 'hamburger active';
        } else {
            className = 'hamburger';
        }

        return className;
    }

    handleMenuClass() {
        let className;

        if (this.state.menuOpen) {
            className = 'navbar__menu active lg';
        } else {
            className = 'navbar__menu collapsed lg';
        }

        return className;
    }

    onNavigation = () => {
        this.setState({ menuOpen: false });
    };

    render() {
        return (
            <Nav className="navbar">
                <div className="navbar__brand">
                    <NavLink to="/">
                        <i className="icon-brand" />
                    </NavLink>
                </div>
                <div className={this.handleHamburgerClass()} onClick={this.handleMenu}>
                    <div />
                    <div />
                    <div />
                </div>
                <ul className={this.handleMenuClass()}>
                    <NavLink activeClassName="active" onClick={() => this.onNavigation()} to="/" exact>
                        Home <i className="icon-home" />
                    </NavLink>
                    <NavLink activeClassName="active" onClick={() => this.onNavigation()} to="/portfolio">
                        Portfolio <i className="icon-briefcase" />
                    </NavLink>
                    <NavLink activeClassName="active" onClick={() => this.onNavigation()} to="/contact">
                        Contact <i className="icon-message-square" />
                    </NavLink>
                </ul>
            </Nav>
        );
    }
}

export default NavBar;
