import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, signOutWithGoogle } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/orders">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {
                    user.email ?
                        <div style={{ display: 'inline', color: "white" }}>
                            <span>Hello:{user.displayName}</span><button onClick={signOutWithGoogle}> Logout</button>
                        </div> :
                        <NavLink to="/login">Login</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;