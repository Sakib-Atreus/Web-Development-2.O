import React from 'react';

const Job = ({job}) => {
    const {picture, name, company, button1, button2, address} = job;
    return (
        <section>
            <div className='p-3 border-2 gap-4 text-left'>
                <img className='w-20 h-15' src={picture} alt="" />
                <h2>{name}</h2>
                <h3>{company}</h3>
                <div>
                    <button className='bg-purple-200 font-bold text-xl p-2 rounded-md text-white'>{button1}</button>
                    <button className='bg-purple-200 font-bold text-xl p-2 rounded-md text-white'>{button2}</button>
                </div>
                <h3>{address}</h3>
                <button className='bg-purple-500 font-bold text-xl p-2 rounded-md text-white'>View Details</button>
            </div>
        </section>
    );
};

export default Job;