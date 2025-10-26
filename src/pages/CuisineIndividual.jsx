import React from "react";
import { Link, useParams } from "react-router-dom";
import "./BlogContent.css";

const cuisineData = {
  "pani-puri": {
    name: "Pani Puri",
    mainImage: "https://images.pexels.com/photos/13041629/pexels-photo-13041629.jpeg",
    history: "Pani puri's origins are a blend of legend and history. Many sources trace its beginnings back to the ancient Magadha kingdom, now in present-day Bihar, more than 600 years ago. In some legends, it is said that Draupadi, a key figure from the Mahabharata, invented pani puri during the Pandavas' exile; her mother-in-law, Kunti, challenged her to make a meal using limited ingredients, and Draupadi created small puris filled with spicy water and vegetables, which everyone loved. Over centuries, the snack evolved and spread across India, taking on different names and regional flavors.",
    ingredients: "Semolina, maida, water, oil, chaat masala, salt, mint leaves, coriander, ginger, green chillies, tamarind, boondi, potatoes, onion, chana.",
    process: [
      { title: "Make puris", description: "Prepare dough from semolina (rava) and flour. Roll into small balls, flatten, and deep fry until crispy. Let cool completely." },
      { title: "Make filling", description: "Boil potatoes (and chickpeas, if using). Mash with salt, spices, and chopped coriander." },
      { title: "Make pani (spiced water)", description: "Blend mint, coriander, green chili, tamarind, salt, cumin, and jaggery with water. Strain and chill." },
      { title: "Assemble", description: "Crack the top of each puri, fill with potato mixture, pour in spiced water (and sweet chutney if you like)." },
      { title: "Eat immediately", description: "So puris stay crispy and fresh." }
    ]
  },
  "dumbiryani": {
    name: "Dum Biryani",
    mainImage: "https://images.pexels.com/photos/9609863/pexels-photo-9609863.jpeg",
    history: "Dum Biryani has its origins in the kitchens of the Mughal Empire, blending Persian culinary traditions with Indian spices. The name 'dum' refers to the slow-cooking method where meat and rice are cooked together in a sealed pot to allow the flavors to meld. Popular regional varieties include Hyderabadi and Lucknowi biryanis, each with its distinctive style and spices. Over time, it became a beloved royal dish, spreading across the Indian subcontinent and beyond.",
    ingredients: "Basmati rice, meat (chicken, mutton, or beef), yogurt, fried onions (birista), garlic and ginger paste, fresh mint and coriander leaves, whole and ground spices (cardamom, cloves, cinnamon, bay leaves, nutmeg, mace, black pepper), saffron soaked in warm milk, green chilies, ghee or oil, salt, and lemon juice (optional).",
    process: [
      { title: "Marinate meat", description: "Mix meat with yogurt, garlic-ginger paste, spices, herbs, and salt. Let it rest for several hours." },
      { title: "Fry onions", description: "Slice and deep-fry onions until golden brown." },
      { title: "Cook rice", description: "Partially cook basmati rice with whole spices until firm." },
      { title: "Layering", description: "In a heavy pot (handi), layer marinated meat, fried onions, and rice alternately. Add saffron milk, ghee, herbs, and lemon juice between layers." },
      { title: "Seal and cook", description: "Seal the pot tightly to trap steam and cook on low heat for 45 minutes to an hour." },
      { title: "Serve", description: "Gently mix and serve hot with raita or salad." }
    ]
  },
  "milletsupma": {
    name: "Millets Upma",
    mainImage: "https://images.pexels.com/photos/20408455/pexels-photo-20408455.jpeg",
    history: "Upma is a traditional South Indian breakfast dish that has been enjoyed for generations. The modern version using millets represents a return to ancient grains, offering a healthier alternative to semolina-based upma. Millets were once a staple crop in India and are now experiencing a revival due to their nutritional benefits.",
    ingredients: "Millets (foxtail or pearl), mustard seeds, curry leaves, urad dal, chana dal, onions, green chilies, ginger, cashews, ghee or oil, salt.",
    process: [
      { title: "Roast millets", description: "Dry roast millets until aromatic and set aside." },
      { title: "Prepare tempering", description: "Heat oil/ghee, add mustard seeds, dals, curry leaves, and let them splutter." },
      { title: "Sauté vegetables", description: "Add onions, green chilies, ginger, and sauté until golden." },
      { title: "Cook millets", description: "Add water (2:1 ratio), bring to boil, add roasted millets, and cook covered until soft." },
      { title: "Garnish", description: "Add fried cashews and fresh coriander before serving." }
    ]
  },
  "chai": {
    name: "Chai",
    mainImage: "https://images.pexels.com/photos/34423691/pexels-photo-34423691.jpeg",
    history: "Indian chai, or masala chai, became popular during the British colonial period when tea plantations were established in Assam and Darjeeling. The addition of spices and milk made it uniquely Indian, transforming it into the beloved beverage enjoyed across the country today. Each household has its own special recipe passed down through generations.",
    ingredients: "Black tea leaves (CTC or loose), water, milk, sugar, ginger, cardamom, cloves, cinnamon, black pepper (optional).",
    process: [
      { title: "Boil water with spices", description: "Crush ginger, cardamom, and other spices. Boil in water for 2-3 minutes." },
      { title: "Add tea leaves", description: "Add tea leaves and boil for 1-2 minutes until the color darkens." },
      { title: "Add milk and sugar", description: "Pour in milk and add sugar to taste. Bring to a boil." },
      { title: "Simmer", description: "Let it simmer for 2-3 minutes, allowing flavors to blend." },
      { title: "Strain and serve", description: "Strain into cups and serve hot." }
    ]
  },
  "dosa": {
    name: "Dosa",
    mainImage: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
    history: "Dosa originated in South India, with references dating back to ancient Tamil literature. This crispy, fermented crepe made from rice and lentils has become a staple breakfast across India and gained international popularity as a healthy, versatile dish. The art of making the perfect dosa has been perfected over centuries.",
    ingredients: "Rice (parboiled and raw), urad dal, fenugreek seeds, salt, water, oil for cooking.",
    process: [
      { title: "Soak ingredients", description: "Soak rice and urad dal separately with fenugreek seeds for 4-6 hours." },
      { title: "Grind batter", description: "Grind separately to a smooth consistency, then mix together with salt." },
      { title: "Ferment", description: "Let the batter ferment in a warm place for 8-12 hours until it doubles in volume." },
      { title: "Cook dosa", description: "Heat a flat griddle, pour a ladleful of batter, and spread it thin in circular motions." },
      { title: "Crisp and serve", description: "Drizzle oil around edges, cook until golden and crispy. Serve with chutney and sambar." }
    ]
  },
  "alooparatha": {
    name: "Aloo Paratha",
    mainImage: "https://images.pexels.com/photos/28885201/pexels-photo-28885201.jpeg",
    history: "Aloo Paratha is a North Indian flatbread that became popular in Punjab and surrounding regions. This hearty stuffed bread filled with spiced potatoes is a beloved breakfast and comfort food, often served with yogurt, butter, and pickles. It represents the soul of Punjabi home cooking.",
    ingredients: "Whole wheat flour, potatoes, green chilies, coriander leaves, garam masala, amchur (dry mango powder), salt, ghee or oil.",
    process: [
      { title: "Prepare filling", description: "Boil and mash potatoes. Mix with chopped chilies, coriander, spices, and salt." },
      { title: "Make dough", description: "Knead wheat flour with water and a pinch of salt into a soft dough. Rest for 15 minutes." },
      { title: "Stuff parathas", description: "Roll out small disc, place filling in center, seal edges, and roll out gently into a flat circle." },
      { title: "Cook on griddle", description: "Heat a tawa/griddle, cook paratha on both sides with ghee until golden spots appear." },
      { title: "Serve hot", description: "Serve immediately with yogurt, butter, and pickle." }
    ]
  }
};

export default function CuisineIndividual() {
  const { cuisineId } = useParams();
  console.log("CuisineIndividual loaded!");
  console.log("cuisineId from URL:", cuisineId);
  const cuisine = cuisineData[cuisineId];
  console.log("Found cuisine data:", cuisine);

  if (!cuisine) {
    return (
      <div className="destination-not-found">
        <h1>Cuisine not found</h1>
        <p>Sorry, we couldn't find information about this cuisine.</p>
        <Link to="/authentic-india" className="btn btn-primary">
          Back to Cuisines
        </Link>
      </div>
    );
  }

  return (
    <div className="destination-detail">
      <div className="destination-header">
        <img 
          src={cuisine.mainImage} 
          alt={cuisine.name}
          className="main-image"
        />
        <h1 className="destination-title">{cuisine.name}</h1>
      </div>

      <section className="destination-section">
        <h2 className="section-title">History of {cuisine.name}</h2>
        <p className="destination-description">{cuisine.history}</p>
      </section>

      <section className="destination-section">
        <h2 className="section-title">Ingredients</h2>
        <p className="destination-description">{cuisine.ingredients}</p>
      </section>

      <section className="destination-section">
        <h2 className="section-title">Making Process</h2>
        {cuisine.process.map((step, index) => (
          <p key={index} className="destination-description">
            <strong>{step.title}:</strong> {step.description}
          </p>
        ))}
      </section>

      <div className="back-button-container">
        <Link to="/authentic-india" className="btn btn-primary back-button">
          ← Back to Cuisines
        </Link>
      </div>
    </div>
  );
}
