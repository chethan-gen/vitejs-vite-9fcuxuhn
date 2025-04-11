// write the component code here
import React from 'react';
import './usercard.css'; // Optional: Add styles in this file

const Usercard = () => {
  // Static variables for user details
  const profilePhoto = "https://i.pinimg.com/736x/dd/ac/97/ddac972d8b9135ad813b251f1b48d280.jpg"; // Replace with your preferred image URL
  const name = "Chethan";
  const email = "chaithuregala123@gmail.com";
  const phone = "+1 234-567-890";
  const address = "123 Main Street, City, Country";

  return (
    <div className="usercard">
      <img src={profilePhoto} alt="Profile" className="usercard__photo" />
      <div className="usercard__details">
        <h2 className="usercard__name">{name}</h2>
        <p className="usercard__email">Email: {email}</p>
        <p className="usercard__phone">Phone: {phone}</p>
        <p className="usercard__address">Address: {address}</p>
      </div>
    </div>
  );
};

export default Usercard;
