import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loggedStatus } from "../Redux/Actions";
import { clearLoggedData } from '../Redux/Actions';
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate();
    // Redux state to check if the user is logged in
    const isLoggedIn = useSelector(state => state.loggedin.isLoggedIn);

    // Redux dispatcher to update the login status
    const dispatch = useDispatch();

    // Function to handle user logout
    const handleLogout = () => {
        // dispatch(loggedStatus(false));
        // Dispatch the action to clear loggedData
        dispatch(clearLoggedData());

        // Clear loggedData from localStorage
        localStorage.removeItem('loggedData');
        navigate('/login')

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark container my-3">
            <div className="container-fluid mx-3">
                {/* Navbar Brand */}
                <Link className="navbar-brand text-white" to="/">Navbar</Link>

                {/* Navbar Toggle Button */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-white"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        {/* Home Link */}
                        <li className="nav-item ">
                            <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                        </li>

                        {/* About Us Link */}
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/about">About Us</Link>
                        </li>

                        {/* Contact Us Link */}
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/contact">Contact Us</Link>
                        </li>

                        {/* Menu Link */}
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/menu">Menu</Link>
                        </li>

                        {/* Cart Link */}
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/cart">Cart</Link>
                        </li>

                        {/* Login Link (Visible when not logged in) */}
                        <li className='nav-item '>
                            <Link className="nav-link active text-white" aria-current="page" to="/login" style={{ display: isLoggedIn ? 'none' : 'block' }}>Login</Link>
                        </li>

                        {/* Sign Up Link */}
                        <li className='nav-item'>
                            <Link className="nav-link active text-white" aria-current="page" to="/signup">Sign Up</Link>
                        </li>

                        {/* Profile Link */}
                        <li className='nav-item'>
                            <Link className="nav-link active text-white" aria-current="page" to="/profile">Profile</Link>
                        </li>
                    </ul>

                    {/* Logout Button (Visible when logged in) */}
                    <div>
                        <button className='btn btn-primary' onClick={handleLogout} style={{ display: isLoggedIn ? 'block' : 'none' }}>Log Out</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
