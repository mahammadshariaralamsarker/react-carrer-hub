import React from 'react';

const Job = ({job}) => {
    const {id, company, logo, featured, position, role, level, postedAt, contract, location, languages, tools} = job
    return (
        <div>
        <img src={logo} alt="" />
            <h1>This is Job:{id}</h1>
        </div>
    );
};

export default Job;