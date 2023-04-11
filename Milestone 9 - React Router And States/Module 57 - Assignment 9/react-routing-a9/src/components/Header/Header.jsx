import React from 'react';

const Header = () => {
    return (
        <div className='grid grid-cols-2 text-left mt-4'>
            <div>
                <h1 className='text-4xl font-bold'>One Step <br/>Closer To Your <br/><span>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the <br/>information you need. Its your future. Come find it. Manage all <br/>your job application from start to finish.</p>
                <button className='font-bold text-white p-2 rounded-md bg-purple-500'>Get Started</button>
            </div>
            <div>
                <img className='' src="https://media.istockphoto.com/id/1358759984/photo/young-teenage-boy-in-black-t-shirt-looking-at-camera-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=PgULelm5FCNnOAI7tEQp9teor1zHqkrYtj9cy-z_yfQ=" alt="" />
            </div>
        </div>
    );
};

export default Header;