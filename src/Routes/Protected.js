import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Protected(props) {
    // Destructure 'Component' from the props
    const { Component } = props;

    // Get the 'navigate' function from react-router-dom
    const navigateprotected = useNavigate();

    // Check for authentication data in local storage
    useEffect(() => {
        const storedData = localStorage.getItem('loggedData');

        // Redirect to the login page if user is not authenticated
        if (!storedData) {
            navigateprotected('/login');
        }
    }, [navigateprotected]);

    return (
        <div>
            <Component />
        </div>
    );
}

export default Protected;
