import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
    // Retrieve user data from Redux state
    const userData = useSelector(state => state.loggedin.userData);
    console.log(userData)
    return (
        <div>
            <h1>Profile</h1>
            {/* Display user information */}
            {userData && (
                <div>
                    <p>User Name: {userData.username}</p>
                    {/* Add other user information fields as needed */}
                </div>
            )}
            {/* Display a message if user data is not available */}
            {!userData && <p>User data not available.</p>}
        </div>
    );
}

export default Profile;
