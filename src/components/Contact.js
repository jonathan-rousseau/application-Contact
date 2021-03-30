import React from "react";
import "./Contact.css"

function Contact() {
    const onLine=true;
    return (
      <div className="Contact">
        <img
          src="https://storage.googleapis.com/quest_editor_uploads/vCjtNhRyBIOVCBnKLqhab4Q6yXF9Eg9o.jpg"
          alt="avatar"
          className="avatar"
        />
        <div className="status">
          <h3 className="name"> Jonathan Rousseau </h3>
          <div className={onLine ? "status-online" : "status-offline"}></div>
          <p className="status-text"> {onLine ? `online` : `offline`}</p>
        </div>
      </div>
    );
  }

  export default Contact;