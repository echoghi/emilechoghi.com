import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { NavBrand } from './styles';

interface Brand {
    onClick: () => void;
}

const Brand: React.FunctionComponent<Brand> = props => {
    return (
        <NavBrand {...props}>
            <NavLink to="/">
                <i className="icon-brand" />
            </NavLink>
        </NavBrand>
    );
};

export default Brand;
