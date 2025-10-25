import React from "react";
import { Link } from "react-router-dom";

export default function LifestyleWellness() {
  const topics = [
    {
      id: "yoga-ayurveda",
      name: "Yoga & Ayurveda",
      image: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg",
      alt: "Yoga and Ayurveda in India"
    },
    {
      id: "daily-routines",
      name: "Traditional Daily Routines",
      image: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg",
      alt: "Daily morning wellness routine"
    },
    {
      id: "indian-cuisine-health",
      name: "Healthy Indian Cuisine",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      alt: "Healthy Indian food"
    },
    {
      id: "meditation",
      name: "Meditation & Mindfulness",
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
      alt: "Meditation and mindfulness"
    },
    {
      id: "natural-remedies",
      name: "Natural Remedies & Home Care",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
      alt: "Natural Indian remedies"
    }
  ];
return (
    <div className="BoxContainer">
      <h1>Lifestyle & Wellness in India</h1>
      
      <div className="lifestyle-cards-container">
        {topics.map((topic) => (
          <div className="lifestyle-card" key={topic.id}>
            <img 
              src={topic.image} 
              alt={topic.alt}
              className="lifestyle-card-image"
            />
            <div className="lifestyle-card-body">
              <h3 className="lifestyle-card-title">{topic.name}</h3>
              <Link 
                to={`/lifestyle/${topic.id}`} 
                className="btn btn-primary"
              >
                Discover
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}