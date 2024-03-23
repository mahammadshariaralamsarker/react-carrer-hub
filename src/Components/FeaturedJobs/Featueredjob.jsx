import React, { useEffect } from 'react';
import { useState } from 'react';
import Job from '../Job/Job';

const Featueredjob = () => {

        const [jobs, setJobs] = useState([]);
        
        const [datalength, setdatalength] = useState(4);


        useEffect(() => {
            fetch('../../../public/jobs.json')
                .then(res => res.json())
                .then(data => setJobs(data))
        },[])


    return (
        <div>
            <div className='text-center'>
                <h2 className='text-5xl '>Featueredjob:{jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                {
                    jobs.slice(0,datalength).map(job=><Job key={job.id} job={job}></Job> )
                }
            </div>
            <div className={datalength===jobs.length ? 'hidden' : 'text-center'}>
                <button className='btn btn-primary ' onClick={() => setdatalength(jobs.length)}>Show All</button>
            </div>

        </div>
    );
};

export default Featueredjob;