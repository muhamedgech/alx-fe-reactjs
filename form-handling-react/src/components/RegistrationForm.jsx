// src/components/RegistrationForm.js

import React, { useState } from "react";

const RegistrationForm = () => {
  // State for the form fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for validation error messages
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on submit

    // Simple validation logic
    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    // If form is valid, clear the error and process the submission
    setError("");
    console.log("Form Submitted: ", { username, email, password });

    // Optionally clear the form after submission
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
