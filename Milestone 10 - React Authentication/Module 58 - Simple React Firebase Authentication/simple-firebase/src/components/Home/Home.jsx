import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome To HomePage</h1>
            <Link to="/">Home </Link>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Home;