import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='grid grid-cols-3 md:grid-cols-4 sm:grid-cols-2'>
            <div>
                <h1 className='font-bold'>CarrierHub</h1>
            </div>

            <div className='flex gap-3'>
                <p><Link to="/">Home</Link></p>
                <p><Link to="dashboard">Dashboard</Link></p>
                <p><Link to="appliedJobs">Applied Jobs</Link></p>
                <p><Link to="blog">Blog</Link></p>
            </div>

            <div>
                <button className='font-bold text-white p-2 rounded-md bg-purple-500'>Start Applying</button>
            </div>
        </nav>
    );
};

export default Navbar;