// AboutUsPage.jsx
import React from 'react';
import './activities.css';
//import { Link } from "react-router-dom"

export const Activities = () => {
  return (
    <div className="about-container">
      <h1>Activities</h1>
      <p>This website has curated cyber activities to help you learn about cyber attacks and train agianst cyber attacks.</p>
      <a href="https://realutilizedalphatest.srisaivikasmuna.repl.co/">
      <div className="profile-card">
        <img src="https://static.vecteezy.com/system/resources/previews/000/173/720/original/phishing-data-via-internet-mobile-phone-vector.jpg" alt="Phishing" className="profile-image" />
        <div className="profile-details">
          <h2>Phishing Activity</h2>
          <p>
          This activity simulates a login page, similar to Facebook's, to show how attackers deceive users into sharing their login details. By participating, users learn to spot signs of phishing like fake URLs, poor design, and requests for sensitive info without proper authentication
          </p>
        </div>
        
      </div>
      </a>
      <a href="https://passworddecipher.srisaivikasmuna.repl.co/">

      <div className="profile-card">
        <img src="https://th.bing.com/th/id/OIP.1J71HxbWkP52NB1a_Q5ERAHaHa?pid=ImgDet&w=1200&h=1200&rs=1" className="profile-image" />
        <div className="profile-details">
          <h2>Password Strength Activity</h2>
          <p>
          The Password Strength Checker is an educational activity that helps users evaluate the strength of their passwords. By inputting their password, users receive an estimated crack time and a classification of their password strength. The sleek and modern design, inspired by FAANG companies, enhances the user experience, making it visually appealing and easy to navigate.
          </p>
        </div>
      </div>
      </a>
    </div>
  );

};

//C:\Users\srisa\CyberSafetyWebpage\src\components\activities\activties.jsx
