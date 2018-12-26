import React from 'react';
import styled from 'styled-components';
import Brand from './Brand';
import Menu from './Menu';

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

const NavBar = () => (
    <Nav className="navbar">
        <Brand />

        <Menu />
    </Nav>
);

export default NavBar;
