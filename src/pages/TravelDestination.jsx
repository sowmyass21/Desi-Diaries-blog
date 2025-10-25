import React from "react";
import { Link, useParams } from "react-router-dom";
import "./BlogContent.css";
const destinationData = {
  "goa": {
    name: "Goa",
    mainImage: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg",
    images: [
      "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg",
      "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg"
    ],
    description: "Goa, India's smallest state by area, is renowned for its stunning coastline, Portuguese colonial architecture, vibrant nightlife, and laid-back beach culture. With over 100 kilometers of coastline dotted with pristine beaches, Goa offers everything from lively beach parties at Baga and Calangute to serene retreats at Palolem and Agonda.",
    highlights: [
      "Beaches: Baga, Calangute, Anjuna, Palolem, Vagator",
      "Churches: Basilica of Bom Jesus (UNESCO World Heritage Site), Se Cathedral",
      "Forts: Aguada Fort, Chapora Fort (Dil Chahta Hai fame)",
      "Nightlife: Beach shacks, clubs, live music venues",
      "Water Sports: Parasailing, jet skiing, scuba diving, dolphin watching",
      "Cuisine: Goan fish curry, vindaloo, bebinca, feni (local spirit)"
    ],
    bestTime: "November to February (pleasant weather, peak season)",
    howToReach: "Goa International Airport (Dabolim), well-connected by rail and road from major Indian cities"
  },
  "kerala": {
    name: "Kerala",
    mainImage: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg",
    images: [
      "https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg",
      "https://images.pexels.com/photos/6134052/pexels-photo-6134052.jpeg"
    ],
    description: "Known as 'God's Own Country,' Kerala is a tropical paradise in South India featuring tranquil backwaters, lush hill stations, exotic wildlife, ayurvedic wellness traditions, and rich cultural heritage. The state's unique geography combines Arabian Sea coastline with Western Ghats mountain ranges, creating diverse ecosystems.",
    highlights: [
      "Backwaters: Alleppey (Alappuzha) houseboat cruises, Kumarakom bird sanctuary",
      "Hill Stations: Munnar tea plantations, Wayanad forests, Thekkady wildlife",
      "Beaches: Kovalam, Varkala, Marari",
      "Ayurveda: Traditional wellness treatments and spa resorts",
      "Culture: Kathakali dance, temple festivals, snake boat races",
      "Cuisine: Kerala sadya, appam with stew, puttu, karimeen fish"
    ],
    bestTime: "October to March (post-monsoon, ideal weather)",
    howToReach: "Cochin International Airport, Trivandrum Airport; extensive rail network along the coast"
  },
  "varanasi": {
    name: "Varanasi",
    mainImage: "https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg",
    images: [
      "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg",
      "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg"
    ],
    description: "Varanasi (Kashi/Benares) is one of the world's oldest continuously inhabited cities and Hinduism's holiest pilgrimage site. Situated on the banks of the sacred Ganges River, this spiritual capital has been a center of learning, culture, and devotion for over 3,000 years. The city's ghats witness daily rituals connecting life, death, and rebirth.",
    highlights: [
      "Ghats: Dashashwamedh Ghat (evening Ganga Aarti), Assi Ghat, Manikarnika Ghat (cremation)",
      "Temples: Kashi Vishwanath Temple (gold-plated), Sankat Mochan Hanuman Temple",
      "Experiences: Sunrise boat ride on Ganges, evening Aarti ceremony, narrow alleyways exploration",
      "Nearby: Sarnath (where Buddha gave his first sermon), Ramnagar Fort",
      "Culture: Classical music, Banarasi silk weaving, traditional wrestling (akhara)",
      "Cuisine: Banarasi paan, kachori sabzi, lassi, street food"
    ],
    bestTime: "November to February (cool weather, major festivals)",
    howToReach: "Lal Bahadur Shastri International Airport (Babatpur), major railway junction"
  },
  "ladakh": {
    name: "Ladakh",
    mainImage: "https://images.pexels.com/photos/1727416/pexels-photo-1727416.jpeg",
    images: [
      "https://images.pexels.com/photos/1647036/pexels-photo-1647036.jpeg",
      "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg"
    ],
    description: "Ladakh, the 'Land of High Passes,' is a high-altitude desert in the Himalayas known for its stark, dramatic landscapes, ancient Buddhist monasteries, crystal-clear lakes, and adventure opportunities. At elevations ranging from 9,000 to 25,000+ feet, Ladakh offers a unique blend of Tibetan Buddhist culture and breathtaking natural beauty.",
    highlights: [
      "Lakes: Pangong Tso (changing colors), Tso Moriri, Tso Kar",
      "Monasteries: Hemis, Thiksey, Diskit, Lamayuru",
      "Passes: Khardung La (world's highest motorable road), Chang La",
      "Valleys: Nubra Valley (sand dunes, Bactrian camels), Zanskar Valley",
      "Adventure: Trekking (Chadar trek on frozen river), mountain biking, rafting",
      "Culture: Buddhist festivals, traditional Ladakhi cuisine (thukpa, momos)"
    ],
    bestTime: "May to September (roads open, pleasant weather)",
    howToReach: "Kushok Bakula Rimpochee Airport (Leh), or road journey via Manali or Srinagar (seasonal)"
  },
  "manali": {
    name: "Manali",
    mainImage: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg",
    images: [
      "https://images.pexels.com/photos/4319752/pexels-photo-4319752.jpeg",
      "https://images.pexels.com/photos/2228361/pexels-photo-2228361.jpeg"
    ],
    description: "Nestled in the Kullu Valley of Himachal Pradesh, Manali is a popular hill station and adventure hub at 2,050 meters elevation. Surrounded by snow-capped peaks, deodar and pine forests, and the gushing Beas River, Manali serves as a gateway to Ladakh and offers year-round tourism from honeymoon couples to adventure seekers.",
    highlights: [
      "Attractions: Solang Valley (skiing, paragliding), Rohtang Pass (snow activities)",
      "Temples: Hadimba Devi Temple, Manu Temple, Vashisht hot springs",
      "Old Manali: Backpacker hub with cafes, shopping, vibrant nightlife",
      "Adventure: Trekking, river rafting, mountain biking, zorbing",
      "Nearby: Kullu Valley, Kasol (hippie village), Manikaran (hot springs, Sikh gurudwara)",
      "Cuisine: Himachali dham, sidu, trout fish"
    ],
    bestTime: "October to February (snow season), March to June (pleasant summer)",
    howToReach: "Bhuntar Airport (Kullu-Manali Airport), well-connected by road from Delhi and Chandigarh"
  },
  "statue-of-unity": {
    name: "Statue of Unity",
    mainImage: "https://images.pexels.com/photos/9350788/pexels-photo-9350788.jpeg",
    images: [
      "https://images.pexels.com/photos/9350789/pexels-photo-9350789.jpeg",
      "https://images.pexels.com/photos/12647636/pexels-photo-12647636.jpeg"
    ],
    description: "The Statue of Unity is the world's tallest statue at 182 meters (597 feet), dedicated to Sardar Vallabhbhai Patel, India's first Deputy Prime Minister and architect of national integration. Located in Gujarat's Narmada district, this engineering marvel stands on the Sadhu Bet island overlooking the Narmada River and Sardar Sarovar Dam.",
    highlights: [
      "Viewing Gallery: 153-meter high observation deck with panoramic views (400 visitors per batch)",
      "Museum & Exhibition: Valley of Flowers, Sardar Patel Memorial, laser light show",
      "Sardar Sarovar Dam: One of the world's largest concrete dams nearby",
      "Activities: Ekta Cruise, Jungle Safari Park, Children's Nutrition Park",
      "Engineering Feat: Bronze cladding, earthquake-resistant design, completed in 2018",
      "Cultural: Tribute to India's Iron Man who unified 562 princely states"
    ],
    bestTime: "October to March (pleasant weather, avoid summer heat)",
    howToReach: "Vadodara Airport (90 km), well-connected by train to Kevadia station, buses from major Gujarat cities"
  },
  "andaman-nicobar": {
    name: "Andaman & Nicobar Islands",
    mainImage: "https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg",
    images: [
      "https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg",
      "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg"
    ],
    description: "The Andaman & Nicobar Islands are a stunning archipelago of 572 tropical islands in the Bay of Bengal, offering pristine beaches, coral reefs, lush rainforests, and unique indigenous cultures. Only 37 islands are inhabited, preserving vast stretches of untouched natural beauty and marine biodiversity.",
    highlights: [
      "Beaches: Radhanagar Beach (Havelock - Asia's best), Elephant Beach, Kalapathar Beach",
      "Water Activities: Scuba diving, snorkeling (coral reefs), sea walking, kayaking",
      "Islands: Havelock Island, Neil Island, Ross Island (colonial ruins), North Bay",
      "History: Cellular Jail (Kala Pani) National Memorial in Port Blair",
      "Wildlife: Marine life, tropical birds, saltwater crocodiles, sea turtles",
      "Culture: Indigenous tribes (restricted areas), colonial British history"
    ],
    bestTime: "October to May (calm seas, ideal for water sports)",
    howToReach: "Veer Savarkar International Airport (Port Blair), ships from Chennai, Kolkata, Visakhapatnam (longer journey)"
  }
};

export default function TravelDestination() {
  const { destinationId } = useParams();
  const destination = destinationData[destinationId];

  if (!destination) {
    return (
      <div className="destination-not-found">
        <h1>Destination not found</h1>
        <p>Sorry, we couldn't find information about this destination.</p>
        <Link to="/travel-tourism" className="btn btn-primary">
          Back to Destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="destination-detail">
      {/* Header Section with Main Image */}
      <div className="destination-header">
        <img 
          src={destination.mainImage} 
          alt={destination.name}
          className="main-image"
        />
        <h1 className="destination-title">{destination.name}</h1>
      </div>

      {/* Description Section */}
      <section className="destination-section">
        <h2 className="section-title">About {destination.name}</h2>
        <p className="destination-description">{destination.description}</p>
      </section>

      {/* Highlights Section */}
      <section className="destination-section">
        <h2 className="section-title">Highlights & Attractions</h2>
        <ul className="highlights-list">
          {destination.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </section>

      {/* Gallery Section */}
      {destination.images && destination.images.length > 0 && (
        <section className="destination-section">
          <h2 className="section-title">Gallery</h2>
          <div className="image-gallery">
            {destination.images.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`${destination.name} view ${index + 1}`}
                className="gallery-image"
              />
            ))}
          </div>
        </section>
      )}

      {/* Best Time to Visit */}
      <section className="destination-section">
        <h2 className="section-title">Best Time to Visit</h2>
        <p className="info-box best-time">{destination.bestTime}</p>
      </section>

      {/* How to Reach */}
      <section className="destination-section">
        <h2 className="section-title">How to Reach</h2>
        <p className="info-box how-to-reach">{destination.howToReach}</p>
      </section>

      {/* Back Button */}
      <div className="back-button-container">
        <Link to="/travel-tourism" className="btn btn-primary back-button">
          ← Back to Destinations
        </Link>
      </div>
    </div>
  );
}
