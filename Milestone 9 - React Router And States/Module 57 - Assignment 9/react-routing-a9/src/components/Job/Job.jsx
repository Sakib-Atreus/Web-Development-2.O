import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Job = ({job}) => {
    const {picture, name, company, button1, button2, address} = job;

    const navigate = useNavigate();

    const handlerNavigateJob = () => {
        // navigate(`jobs/${id}`)
        navigate()
    }
    const JobDetail = job.JobDetail;
    return (
        <section>
            <div className='p-3 border-2 text-left'>
                <img className='w-25 h-10' src={picture} alt="" />
                <h2>{name}</h2>
                <h3>{company}</h3>
                <div>
                    <button className='bg-orange-400 font-bold p-2 rounded-md text-white mr-2'>{button1}</button>
                    <button className='bg-orange-400 font-bold p-2 rounded-md text-white'>{button2}</button>
                </div>
                <h3>{address}</h3>
                {/* <button onClick="/jobsDetail" className='bg-purple-500 font-bold text-xl p-2 rounded-md text-white'>View Details</button> */}
                <Link to="/jobsDetail"><button className='bg-purple-500 font-bold text-xl p-2 rounded-md text-white'>View Details</button></Link>

                <button onClick="">Details</button>
            </div>
        </section>
    );
};

export default Job;