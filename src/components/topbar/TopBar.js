import React, { useContext } from 'react';
import './TopBar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

//React component returns JSX kind on markup
function TopBar() {
    //if user has session than state will not be null else it will be null
    const { state, dispatch } = useContext(UserContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
    }
    const navList = () => {
        if (state) {//user is logged in
            return [
                <li key="111" className="topbar-list-item"><NavLink to="/create">CREATE PROPERTY</NavLink></li>,
                <li key="113" className="topbar-list-item">
                    <NavLink to="/">HOME</NavLink>
                </li>,
                <li key="112" className="topbar-list-item">
                    <button onClick={() => { logout() }}>LOGOUT</button>
                </li>
            ]
        } else {
            return [
                <li key="116" className="topbar-list-item">
                    <NavLink to="/login">LOGIN</NavLink>
                </li>,
                <li key="117" className="topbar-list-item">
                    <NavLink to="/signup">SIGNUP</NavLink>
                </li>
            ]
        }
    }

    return (
        <div className="topbar">
            <div className="topbar-left">
                <i className="topbar-social-icon fab fa-instagram"></i>
                <i className="topbar-social-icon fab fa-facebook"></i>
                <i className="topbar-social-icon fab fa-linkedin"></i>
                <i className="topbar-social-icon fab fa-twitter"></i>
            </div>
            <div className="topbar-center">
                <ul className="topbar-list">
                    <li key="998" className="topbar-list-item">ABOUT</li>
                    <li key="999" className="topbar-list-item">CONTACT</li>
                    {navList()}
                </ul>
            </div>
            <div className="topbar-right">
                <img className="topbar-profile-pic" src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <i className="topbar-search fas fa-search"></i>
            </div>
        </div>
    )
}

export default TopBar
