import React from 'react';
import'./header.css';

const Header = () => {
    return (
        <>
        <div className="header">
            <div className="logo">
            <h1>Web-Fastest</h1>
            </div>
            <div className="menu-item">
            <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Docs.</li>
            <li>Contect</li>
            </ul>
            </div>
        </div>
        <div>
        </div>
        </>
    );
};

export default Header;