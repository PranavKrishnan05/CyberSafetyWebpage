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
          The activity simulates a login page, similar to Facebook's, to show how attackers deceive users into sharing their login details. By participating, users learn to spot signs of phishing like fake URLs, poor design, and requests for sensitive info without proper authentication
          </p>
        </div>
        
      </div>
      </a>
      <a href="https://github.com/SrisaivikasMunagala">

      <div className="profile-card">
        <img src="https://i.ibb.co/sHtYQ6H/IMG-8065.jpg" alt="Srisaivikas" className="profile-image" />
        <div className="profile-details">
          <h2>Srisaivikas</h2>
          <p>
            Srisaivikas is a skilled developer with a focus on front-end development.
            He loves creating beautiful and intuitive user interfaces.
          </p>
        </div>
      </div>
      </a>
    </div>
  );

};

//C:\Users\srisa\CyberSafetyWebpage\src\components\activities\activties.jsx