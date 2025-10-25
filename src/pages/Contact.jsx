import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="destination-detail">
      <h1 className="destination-title">Contact Us</h1>
      <section className="destination-section">
        <p className="destination-description">
          We'd love to hear from you! Whether you have questions, suggestions, or just want to share 
          your experiences, feel free to reach out.
        </p>
        <p className="destination-description">
          <strong>Email:</strong> contact@indianblog.com<br/>
          <strong>Social Media:</strong> Follow us on Instagram and Twitter
        </p>
      </section>
      <div className="back-button-container">
        <Link to="/" className="btn btn-primary back-button">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
