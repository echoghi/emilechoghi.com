import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBrand = styled.div`
    position: absolute;
    font-size: 50px;
    background: #269bda;
    color: #fff;
    width: 50px;
    float: left;
    padding: 15px 30px;

    @media (max-width: 767px) {
        padding: 15px 25px;
        width: 45px;
        z-index: 2;
    }
`;

const Brand = () => (
    <NavBrand>
        <NavLink to="/">
            <i className="icon-brand" />
        </NavLink>
    </NavBrand>
);

export default Brand;
