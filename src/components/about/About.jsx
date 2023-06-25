// AboutUsPage.jsx
import React from 'react';
import './about.css';
//import { Link } from "react-router-dom"

export const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>This website was developed to educate everyone on the internet about the risks of the internet and how to protect themselves from those risks.</p>
     <br></br>
      <a href="https://www.linkedin.com/in/pranav-krishnan-59b24625a/">

      <div className="profile-card">
        <img src="https://i.imgur.com/3qGmTOl.jpg" alt="Pranav" className="profile-image" />
        <div className="profile-details">
          <h2>Pranav Krishnan</h2>
          <p>
          Pranav is a Senior in high school who is passionate about cybersecurity and computer science. 
          He has competed in Cyber Patriot, a prestigious cybersecurity competition run by the Air Force, where he placed third as a national semifinalist among over 5000 competing teams.
          In addition to his technical experience, Pranav is an active member of his community. He is the president and founder of the South Asian Cultural Association at his high school, where he leads his club's outreach efforts to help those in need.
          He is also involved in DECA, an international business organization, where he has made it all the way up to the international level and gained valuable experience in both business and leadership. 
          </p>
        </div>
        
      </div>
      </a>
      <a href="https://github.com/SrisaivikasMunagala">

      <div className="profile-card">
        <img src="https://i.ibb.co/sHtYQ6H/IMG-8065.jpg" alt="Srisaivikas" className="profile-image" />
        <div className="profile-details">
          <h2>Srisaivikas Munagala</h2>
          <p>
            Srisaivikas is a rising senior who is passionate about computer science and Web/App Development.
            He has competed in Cyber Patriot, a prestigious cybersecurity competition run by the Air Force, where he placed third as a national semifinalist among over 5000 competing teams.
            Srisaivikas is also an active member in his school's computer science club. He is the president of the Computer Science Honor Society chapter at his school. 
            He is a skilled developer with a focus on front-end development. He loves creating beautiful and intuitive user interfaces.
            In addition to his skillsets in Web and App development, he also enjoys creating applications using Python.
          </p>
        </div>
      </div>
      </a>
    </div>
  );
};

