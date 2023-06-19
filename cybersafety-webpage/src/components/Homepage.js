import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/video-tutorials">Video Tutorials</a></li>
            <li><a href="/activities">Activities</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Welcome to My Homepage</h1>
        <p className="description">
          In today's digital age, users are more vulnerable than ever to cybersecurity threats. With the increasing reliance on technology and the internet, it is crucial to understand the risks and take measures to protect yourself online. This webpage is dedicated to raising awareness about cybersafety and empowering users with the knowledge they need to stay safe in the digital world.
        </p>
        <h2>Understanding Vulnerability</h2>
        <p className="description">
          Users can be vulnerable to various cyber threats, including phishing attacks, malware infections, data breaches, identity theft, and more. It is important to recognize the tactics used by cybercriminals and be aware of potential vulnerabilities in order to safeguard personal information and maintain privacy and security.
        </p>
        <h2>About Cybersecurity</h2>
        <p className="description">
          Cybersecurity refers to the practice of protecting computers, servers, mobile devices, networks, and data from digital threats. It encompasses measures such as implementing strong passwords, using encryption, keeping software up to date, being cautious of suspicious links or emails, and adopting security best practices.
        </p>
        <h2>How This Page Helps You Learn About Cybersafety</h2>
        <p className="description">
          This webpage provides valuable resources, articles, and tips on various aspects of cybersafety. You can explore topics such as secure online behavior, safe browsing habits, protecting personal information, detecting and avoiding scams, securing your devices, and much more. By educating yourself about cybersafety, you can make informed decisions, mitigate risks, and protect yourself and your digital presence.
        </p>
      </main>
    </div>
  );
}

export default Homepage;



