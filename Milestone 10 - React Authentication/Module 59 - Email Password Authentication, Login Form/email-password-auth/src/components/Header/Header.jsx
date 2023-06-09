import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">SignUp</Link>
            <Link to="/register-rbs">RegisterRBS</Link>
        </nav>
    );
};

export default Header;