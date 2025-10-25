import React from "react";
import { Link } from "react-router-dom";

export default function FestivalsAndTraditions() {
  console.log("FestivalsAndTraditions component rendered");

  const festivals = [
    {
      id: "diwali",
      name: "Diwali",
      image: "https://images.pexels.com/photos/7121493/pexels-photo-7121493.jpeg",
      alt: "Diwali - Festival of Lights"
    },
    {
      id: "holi",
      name: "Holi",
      image: "https://images.pexels.com/photos/2041707/pexels-photo-2041707.jpeg",
      alt: "Holi - Festival of Colors"
    },
    {
      id: "navratri",
      name: "Navratri",
      image: "https://images.pexels.com/photos/10852670/pexels-photo-10852670.jpeg",
      alt: "Navratri - Nine Nights Festival"
    },
    {
      id: "durga-puja",
      name: "Durga Puja",
      image: "https://images.pexels.com/photos/34407957/pexels-photo-34407957.jpeg",
      alt: "Durga Puja - Goddess Durga worship"
    },
    {
      id: "eid",
      name: "Eid-ul-Fitr",
      image: "https://images.pexels.com/photos/2989625/pexels-photo-2989625.jpeg",
      alt: "Eid-ul-Fitr - Islamic celebration"
    },
    {
      id: "christmas",
      name: "Christmas",
      image: "https://images.pexels.com/photos/1656564/pexels-photo-1656564.jpeg",
      alt: "Christmas - Christian celebration in India"
    }
  ];

 return (
    <div className="BoxContainer">
      <h1>Cultural Festivals & Traditions</h1>
      
      <div className="festival-cards-container">
        {festivals.map((festival) => (
          <div className="festival-card" key={festival.id}>
            <img 
              src={festival.image} 
              alt={festival.alt}
              className="festival-card-image"
            />
            <div className="festival-card-body">
              <h3 className="festival-card-title">{festival.name}</h3>
              <Link 
                to={`/festival/${festival.id}`} 
                className="btn btn-primary"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
