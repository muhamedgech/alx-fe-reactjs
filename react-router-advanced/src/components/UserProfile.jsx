import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams(); // Access dynamic parameter from URL
  return (
    <div>
      <h1>User Profile for {userId}</h1>
      {/* Fetch and display user data based on the userId */}
    </div>
  );
}

export default UserProfile;
