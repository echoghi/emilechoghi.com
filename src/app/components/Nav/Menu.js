import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger';
import styled from 'styled-components';

const Link = styled(NavLink)`
    display: inline-block;
    font-size: 16px;
    padding: 8px 16px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    text-decoration: none;
    border-radius: 2px;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    outline: none;

    span {
        font-family: 'Varela Round', serif;
        text-transform: none;
    }

    i {
        display: none;
    }

    &.active {
        color: #269bda;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }

    @media (max-width: 767px) {
        display: block;
        padding: 20px 10px;
        text-align: left;

        i {
            display: block;
            float: right;
            font-size: 25px;
        }

        &:first-child {
            margin-top: 50px;
            padding: 30px 10px;
            border-bottom: 1px solid #ecf1f6;
        }

        &:nth-child(2) {
            padding-top: 30px;
        }

        &:last-child {
            border-bottom: 1px solid #ecf1f6;
            padding-bottom: 30px;
        }
    }
`;

const Links = styled.ul`
    display: block;
    list-style: none;
    float: right;
    padding: 10px 15px;
    font-weight: normal;

    @media (max-width: 767px) {
        height: 100vh;
        float: none;
        background: #fff;
        text-align: center;
        transform: ${props => (props.open ? 'scaleY(1)' : 'scaleY(0)')};
        transition: ${props =>
            props.open
                ? 'transform 0.3s cubic-bezier(0.01, 0.03, 0.29, 1.17), opacity 0.2s'
                : 'transform 0.1s cubic-bezier(0.71, 0.02, 0.9, 0.23), opacity 0.1s'};
        transform-origin: top;
    }
`;

const handleActivePath = path => {
    if (window.location.pathname === path) {
        return 'active';
    } else return null;
};

const Menu = () => {
    const [open, handleMenu] = useState(false);

    return (
        <Fragment>
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
        </Fragment>
    );
};

export default Menu;
