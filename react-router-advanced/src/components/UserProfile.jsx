import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();  // Get the dynamic 'id' from the URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user profile data based on the 'id' from the URL
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);

  if (!user) {
    return <p>Loading user profile...</p>;
  }

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      {/* You can display more user data here as needed */}
    </div>
  );
}

export default UserProfile;
