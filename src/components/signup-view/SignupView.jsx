// src/components/signup-view/SignupView.jsx
import React, { useState } from 'react';
import './signup-view.scss'; // Ensure the styles are correctly imported

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    fetch("https://myflix-api-app-ff32afce7dc8.herokuapp.com/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          alert("Signup successful");
        } else {
          alert("Signup failed");
        }
      })
      .catch(() => {
        alert("Something went wrong during signup");
      });
  };

  return (
    <div className="auth-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="birthday">Birthday</label>
        <input
          type="date"
          id="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        <a href="/login">Already have an account? Login</a>
      </form>
    </div>
  );
};
