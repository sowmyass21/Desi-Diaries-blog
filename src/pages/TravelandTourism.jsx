import React from "react";
import { Link } from "react-router-dom";

export default function TravelTourism() {
  const destinations = [
    {
      id: "goa",
      name: "Goa",
      image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg",
      alt: "Beautiful beach in Goa with palm trees"
    },
    {
      id: "kerala",
      name: "Kerala",
      image: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
      alt: "Kerala backwaters with houseboat"
    },
    {
      id: "varanasi",
      name: "Varanasi",
      image: "https://images.pexels.com/photos/8112519/pexels-photo-8112519.jpeg",
      alt: "Varanasi ghats on Ganges river"
    },
    {
      id: "ladakh",
      name: "Ladakh",
      image: "https://images.pexels.com/photos/1727416/pexels-photo-1727416.jpeg",
      alt: "Ladakh mountain landscape with monastery"
    },
    {
      id: "manali",
      name: "Manali",
      image: "https://images.pexels.com/photos/939714/pexels-photo-939714.jpeg",
      alt: "Manali snow mountains and valleys"
    },
    {
      id: "statue-of-unity",
      name: "Statue of Unity",
      image: "https://images.pexels.com/photos/34410186/pexels-photo-34410186.jpeg",
      alt: "Statue of Unity in Gujarat"
    },
    {
      id: "andaman-nicobar",
      name: "Andaman & Nicobar Islands",
      image: "https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg",
      alt: "Andaman tropical beach with clear blue water"
    }
  ];

      return (
    <div className="BoxContainer">
      <h1>Travel & Tourism in India</h1>
      
      <div className="travel-cards-container">
        {destinations.map((destination) => (
          <div className="travel-card" key={destination.id}>
            <img 
              src={destination.image} 
              alt={destination.alt}
              className="travel-card-image"
            />
            <div className="travel-card-body">
              <h3 className="travel-card-title">{destination.name}</h3>
              <Link 
                to={`/destination/${destination.id}`} 
                className="btn btn-primary"
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}