import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavBrand } from './styles';

function Brand(props) {
    return (
        <NavBrand {...props}>
            <NavLink to="/">
                <i className="icon-brand" />
            </NavLink>
        </NavBrand>
    );
}

export default Brand;
