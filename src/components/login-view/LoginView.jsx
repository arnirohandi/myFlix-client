// src/components/login-view/LoginView.jsx
import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState({
    user: "",
    email: "",           
    token: "",            
    dateofbirth: ""     
  });

  useEffect(() => {
    // console.log("useEffect: ", profile);
    // console.log("user:", profile.user);
    // console.log("token:", profile.token);
    // console.log("email:", profile.email);
    // console.log("dob:", profile.dateofbirth);
    if (username && profile) {
      onLoggedIn(profile.user, profile);
    }
  }, [username, profile, onLoggedIn]); 

  const handleSubmit = (event) => {
    event.preventDefault();

    const queryParams = new URLSearchParams({
      Username: username,
      Password: password,
    });

    fetch(`https://myflix-api-app-ff32afce7dc8.herokuapp.com/login?${queryParams.toString()}`, {
      method: "POST",
      body: JSON.stringify(queryParams),
    }).then((response) => {
      if (response.ok) {
        const reader = response.body.getReader(); // Access the ReadableStream
        const decoder = new TextDecoder("utf-8"); // For decoding the binary chunks into text

        let result = ""; // Variable to store the chunks

        return reader.read().then(function processChunk({ done, value }) {
          if (done) {
            return result; // Finished reading, return the full result
          }

          result += decoder.decode(value, { stream: true }); // Decode the chunk and append it
          return reader.read().then(processChunk); // Process the next chunk
        });
      } else {
        alert("login failed");
      }
    }).then((data) => {
      const parsedData = JSON.parse(data);
      // console.log("user:", parsedData.user.Username);
      // console.log("token:", parsedData.token);
      // console.log("email:", parsedData.user.Email);
      // console.log("Full Response Body:", parsedData.user);
      setProfile({
        user: parsedData.user.Username,
        email: parsedData.user.Email,
        token: parsedData.token,
        dateofbirth: "2000-01-01"
      })
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="3"
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
