import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1>This is Error page</h1>
            <Link to="/">Go to home</Link>
        </div>
    );
};

export default Error;