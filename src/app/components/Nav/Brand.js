import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavBrand } from './styles';

const Brand = () => {
    /* eslint-disable*/
    const [open, handleMenu] = useState(false);

    return (
        <NavBrand onClick={() => handleMenu(false)}>
            <NavLink to="/">
                <i className="icon-brand" />
            </NavLink>
        </NavBrand>
    );
};

export default Brand;
