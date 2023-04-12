import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const MainPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainPage;