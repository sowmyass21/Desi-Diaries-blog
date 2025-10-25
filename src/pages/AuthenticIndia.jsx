import React from "react";
import { Link } from "react-router-dom";

export default function AuthenticIndia() {
  console.log("AuthenticIndia component rendered"); // Debugging line

  const cuisines = [
    {
      id: "pani-puri",
      name: "Pani Puri",
      image: "https://images.pexels.com/photos/13063313/pexels-photo-13063313.jpeg",
      alt: "Pani Puri - Indian street food"
    },
    {
      id: "dumbiryani",
      name: "Dum Biryani",
      image: "https://images.pexels.com/photos/28674660/pexels-photo-28674660.jpeg",
      alt: "Dum Biryani - Fragrant rice dish"
    },
    {
      id: "milletsupma",
      name: "Millets Upma",
      image: "https://images.pexels.com/photos/20408455/pexels-photo-20408455.jpeg",
      alt: "Millets Upma - Healthy breakfast"
    },
    {
      id: "chai",
      name: "Chai",
      image: "https://images.pexels.com/photos/34423691/pexels-photo-34423691.jpeg",
      alt: "Chai - Indian spiced tea"
    },
    {
      id: "dosa",
      name: "Dosa",
      image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
      alt: "Dosa - South Indian crepe"
    },
    {
      id: "alooparatha",
      name: "Aloo Paratha",
      image: "https://images.pexels.com/photos/28885201/pexels-photo-28885201.jpeg",
      alt: "Aloo Paratha - Stuffed flatbread"
    }
  ];

  return (
    <div className="BoxContainer">
      <h1>Authentic Cuisines of India</h1>
      
      {/* ✅ Add this wrapper with cuisine-cards-container class */}
      <div className="cuisine-cards-container">
        {cuisines.map((cuisine) => (
          <div className="cuisine-card" key={cuisine.id}>
            <img 
              src={cuisine.image} 
              alt={cuisine.alt}
              className="cuisine-card-image"
            />
            <div className="cuisine-card-body">
              <h3 className="cuisine-card-title">{cuisine.name}</h3>
              <Link 
                to={`/cuisine/${cuisine.id}`} 
                className="btn btn-primary"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
