import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header-section">
            <div className="hero-text">
                <span className="hero-text-title">Marketplace</span>
                <span className="hero-text-subtitle">Property Listing</span>
            </div>
            <img className="hero-img" src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </div>
    )
}

export default Header
