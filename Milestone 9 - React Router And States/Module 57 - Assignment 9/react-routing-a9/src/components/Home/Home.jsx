import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;