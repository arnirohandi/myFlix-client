// src/components/login-view/LoginView.jsx
import React, { useState } from 'react';
import './login-view.scss'; // Ensure the styles are correctly imported

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
    };

    fetch("https://myflix-api-app-ff32afce7dc8.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          onLoggedIn(data.user, data.token);
        } else {
          alert("Login failed");
        }
      })
      .catch(() => {
        alert("Something went wrong during login");
      });
  };

  return (
    <div className="auth-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
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
        <button type="submit">Login</button>
        <a href="/signup">Don't have an account? Sign up</a>
      </form>
    </div>
  );
};
