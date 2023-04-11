import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';

const Jobs = () => {
    const jobs = useLoaderData(4);
    console.log(jobs);
    return (
        <div className='grid grid-cols-2'>
            {
              jobs.map(job => <Job
                key={job.id}
                job={job}
              ></Job>)  
            }
        </div>
    );
};

export default Jobs;