import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FiSend } from 'react-icons/fi';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the template parameters with the form data
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    // Send the form data using EmailJS
    emailjs
      .sendForm('service_rjrv8yn', 'template_uc9na9w', e.target, '-RmgmwYCUvP3RpTni')
      .then((response) => {
        console.log('Email sent successfully:', response.text);
        setShowPopup(true);
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className="contact-heading">
          
          Contact Us
          <FiSend className="send-icon" />
        </h1>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
     {showPopup && (
        <div className="popup">
          <p>Message sent successfully!</p>
          <button onClick={handlePopupClose}>Close</button>
        </div>
      )}
    </div>
  );
};

