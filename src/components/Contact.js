import React from 'react';
import './Contact.css';

function Contact() {
  const online = true;
  return (
    <div className="Contact">
      <img className="avatar" src="https://avatars.githubusercontent.com/u/46708558?s=60&amp;v=4"></img>
      <div>
        <h4 className="name">Broly Saiyan</h4>
        <div className="status">
          <span className="status-online"> </span>
          <span className="status-text" > {online ? "Online" : "Offline"}</span>
        </div>

      </div>
    </div>
  );
}

export default Contact;
