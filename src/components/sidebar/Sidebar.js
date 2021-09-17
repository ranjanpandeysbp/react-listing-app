import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar-section">
            <div className="sidebar-subsection">
                <span className="sidebar-title">about me</span>
                <img className="sidebar-img" src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
            </div>
            <div className="sidebar-subsection">
                <span className="sidebar-title">categories</span>
                <ul className="sidebar-categories">
                    <li className="sidebar-category">Buy</li>
                    <li className="sidebar-category">Sell</li>
                    <li className="sidebar-category">Rent</li>
                    <li className="sidebar-category">Hostel</li>
                    <li className="sidebar-category">B & B</li>
                    <li className="sidebar-category">Hotel</li>
                </ul>
            </div>
            <div className="sidebar-subsection">
                <span className="sidebar-title">follow us</span>
                <div className="sidebar-social-icons">
                    <i className="sidebar-social-icon fab fa-instagram"></i>
                    <i className="sidebar-social-icon fab fa-facebook"></i>
                    <i className="sidebar-social-icon fab fa-linkedin"></i>
                    <i className="sidebar-social-icon fab fa-twitter"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
