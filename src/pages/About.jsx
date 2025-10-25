import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="destination-detail">
      <h1 className="destination-title">About This Blog</h1>
      <section className="destination-section">
        <p className="destination-description">
          Welcome to our blog celebrating the rich culture, traditions, and diversity of India. 
          We cover authentic Indian cuisines, travel destinations, cultural festivals, and wellness practices.
        </p>
        <p className="destination-description">
          Our mission is to share the beauty and heritage of India with the world through engaging 
          stories, detailed guides, and stunning visuals.
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
