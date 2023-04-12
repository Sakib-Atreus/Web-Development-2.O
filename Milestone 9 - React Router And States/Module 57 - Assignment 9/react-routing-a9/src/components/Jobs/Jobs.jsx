import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';

const Jobs = () => {
    const jobs = useLoaderData();

    const [visible, setVisible] = useState([4]);

    const showMore = () => {
        setVisible((preValue) => preValue + 2);
    }

    return (
        <div>
            <div className='grid grid-cols-2 gap-4 mb-4 mt-4'>
              {
                jobs.slice(0, visible).map(job => <Job
                  key={job.id}
                  job={job}
                ></Job>)  
              }
            </div>
            <button onClick={showMore} className='bg-purple-700 font-bold text-xl p-2 rounded-md text-white'>Show All</button>
        </div>
    );
};

export default Jobs;