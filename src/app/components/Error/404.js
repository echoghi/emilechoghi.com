import React from 'react';
import { Link } from 'react-router-dom';
import { NotFound } from './Error.styles';

const FourOhFour = () => (
    <NotFound>
        <h1>Not Found</h1>
        <p>Oops! The page you are looking for doesn't exist.</p>
        <Link to="/">Go Back</Link>
    </NotFound>
);

export default FourOhFour;
