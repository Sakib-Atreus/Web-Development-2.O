import React from 'react';

const JobCategory = () => {
    return (
        <div className='mt-12'>
            <h2 className='font-bold text-3xl'>Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-4 gap-3'>
                <div className='text-left'>
                    <img className='w-25 h-20' src="https://cdn-icons-png.flaticon.com/512/2480/2480837.png" alt="" />
                    <h3>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className='text-left'>
                    <img className='w-25 h-20' src="https://cdn-icons-png.flaticon.com/512/2480/2480837.png" alt="" />
                    <h3>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className='text-left'>
                    <img className='w-25 h-20' src="https://cdn-icons-png.flaticon.com/512/2480/2480837.png" alt="" />
                    <h3>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className='text-left'>
                    <img className='w-25 h-20' src="https://cdn-icons-png.flaticon.com/512/2480/2480837.png" alt="" />
                    <h3>Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;