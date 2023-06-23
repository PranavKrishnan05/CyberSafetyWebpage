import React, { useState } from 'react';
//import './App.css';
import facebookLogo from './facebook_logo.png';
import './PhishingActivity.css';


export const PhishingActivity = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginData, setLoginData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a login attempt by logging the entered username and password
    console.log(`Username: ${username} | Password: ${password}`);

    // Display the entered username and password on the webpage
    setLoginData({ username, password });

    // Display an error message to educate users about phishing
    setErrorMessage('Invalid username or password. Please try again.');

    // Clear the form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className="phishing-activity">
      <img className="logo" src={facebookLogo} alt="Facebook logo" />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email address or phone number"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="phishing-activity"> 
        <button type="submit">Log In</button>
        </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {loginData && (
        <div className="login-data">
          <h3>Last Login Attempt</h3>
          <p>Username: {loginData.username}</p>
          <p>Password: {loginData.password}</p>
        </div>
      )}
    </div>
  );
};

export const App = () => {
  const [showNotification, setShowNotification] = useState(true);

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  return (
    <div className="app">
      {showNotification && (
        <div className="notification">
          <p>
            Phishing is a cyber attack where attackers pretend to be trustworthy organizations to trick people into revealing sensitive information. This activity educates users about phishing and how to recognize and avoid it.
          </p>
          <p>
            The activity simulates a login page, similar to Facebook's, to show how attackers deceive users into sharing their login details. By participating, users learn to spot signs of phishing like fake URLs, poor design, and requests for sensitive info without proper authentication.
          </p>
          <p>
            Important: This activity is for education only, not malicious use. It teaches users about online security, helping them protect themselves against threats.
          </p>
          <button className="close-button" onClick={handleNotificationClose}>
            Close
          </button>
        </div>
      )}
      {showNotification && <div className="overlay" />}
      <div className="header">
        <img className="logo" src={facebookLogo} alt="Facebook logo"/>
      </div>
      <PhishingActivity />
      {/* Other components and content */}
    </div>
  );
};



