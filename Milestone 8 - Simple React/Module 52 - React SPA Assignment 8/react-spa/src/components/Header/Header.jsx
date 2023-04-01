import React from 'react';
import './Header.css';
import profileLogo from '../../assets/images/1.png';

const Header = () => {
    return (
        <nav>
            <div className="header">
                <div>
                    <h1>Knowledge Cafe</h1>
                </div>
                <div>
                    <img src={profileLogo} alt="" />
                </div>
            </div>
            <hr/>
        </nav>
    );
};

export default Header;