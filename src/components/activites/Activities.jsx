// AboutUsPage.jsx
import React from 'react';
import './about.css';
import { Link } from "react-router-dom"

export const Activities = () => {
  return (
    <div className="about-container">
      <h1>Activities</h1>
      <p>This page is to help educate through activites Below are the activites we have made thus far:</p>
      <a href="">
      <div className="profile-card">
        <img src="https://i.imgur.com/3qGmTOl.jpg" alt="Pranav" className="profile-image" />
        <div className="profile-details">
          <h2>Pranav</h2>
          <p>
            Pranav is a passionate individual with expertise in web development.
            He enjoys building interactive and user-friendly web applications.
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

