import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";

const Job = ({ job }) => {
    const { id, company_name, logo, job_title, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences } = job
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}!</h2>
                <p>{company_name}</p>
                <div>
                    <button className='px-5 mr-4 py-2 font-extrabold border-1  border text-[#7E90FE]'>{remote_or_onsite}</button>
                    <button className='px-5 py-2 font-extrabold border-1  border text-[#7E90FE]'>{job_type}</button>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
                <div className='flex items-center'>
                    <div className='mr-4 flex items-center'><IoLocationOutline />{location}</div>
                    <div className='mr-4 flex items-center'><CiDollar />{salary}</div>
                </div>

            </div>
        </div>
    );
};

export default Job;