import React from "react";
import { Link, useParams } from "react-router-dom";
import "./blogcontent.css";

const topicData = {
  "yoga-ayurveda": {
    name: "Yoga & Ayurveda",
    mainImage: "https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg",
    description: "India is the birthplace of Yoga and Ayurveda, two ancient wellness systems that have gained worldwide recognition. Yoga, meaning 'union,' focuses on harmonizing the body, mind, and spirit through physical postures (asanas), breathing techniques (pranayama), and meditation. Ayurveda, meaning 'science of life,' is a 5,000-year-old holistic healing system that emphasizes balance through diet, herbs, lifestyle, and therapies tailored to individual body types (doshas).",
    benefits: "Reduces stress and anxiety, improves flexibility and strength, enhances mental clarity, promotes detoxification, balances hormones, boosts immunity, and fosters overall well-being.",
    practices: "Daily yoga asanas like Surya Namaskar, pranayama breathing exercises like Anulom Vilom and Kapalbhati, eating according to your dosha with warm fresh seasonal foods, using herbs like turmeric ashwagandha tulsi and triphala, self-massage with warm oils (Abhyanga), practicing at sunrise, drinking herbal teas, meditation retreats in ashrams.",
    traditions: "Practicing yoga at sunrise, drinking herbal teas, oil pulling, dry brushing, meditation retreats in ashrams."
  },
  "daily-routines": {
    name: "Traditional Daily Routines",
    mainImage: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg",
    description: "Traditional Indian daily routines, known as Dinacharya in Ayurveda, emphasize aligning with natural rhythms for optimal health. These routines include waking before sunrise, cleansing practices, yoga, mindful eating, and early sleep. They are designed to maintain balance, boost energy, and promote longevity.",
    benefits: "Improves digestion, enhances energy levels, promotes mental clarity, supports immune function, and creates a sense of discipline and peace.",
    practices: "Wake up during Brahma Muhurta (4-6 AM), tongue scraping to remove toxins, oil pulling with sesame or coconut oil for 10-20 minutes, drinking warm water with lemon to stimulate digestion, morning prayer or meditation to set positive intentions, gentle yoga or light exercise, eating a light warm breakfast like porridge or upma.",
    traditions: "Bathing before sunrise, lighting a diya (lamp) during prayer, eating meals at fixed times, avoiding heavy foods at night."
  },
  "indian-cuisine-health": {
    name: "Healthy Indian Cuisine",
    mainImage: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    description: "Indian cuisine is naturally rich in vegetables, legumes, whole grains, and healing spices. Traditional Indian cooking emphasizes balance (six tastes: sweet, sour, salty, bitter, pungent, astringent), seasonal ingredients, and Ayurvedic principles. When prepared with minimal oil and refined ingredients, Indian food is incredibly nutritious and supports long-term health.",
    benefits: "Rich in antioxidants, supports digestion, anti-inflammatory properties, high in plant-based protein, supports heart health, and boosts immunity.",
    practices: "Use healing spices like turmeric cumin coriander ginger and fenugreek, eat seasonal and locally grown vegetables and fruits, include lentils dal chickpeas and beans for protein and fiber, cook with moderate amounts of ghee (clarified butter), avoid processed foods and excess sugar, prepare fresh meals daily to retain nutrients and life energy (prana).",
    traditions: "Eating with hands to enhance digestion, starting meals with a prayer, balancing six tastes in every meal, drinking warm water or buttermilk with meals."
  },
  "meditation": {
    name: "Meditation & Mindfulness",
    mainImage: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
    description: "Meditation has been practiced in India for thousands of years as a path to inner peace, self-awareness, and spiritual growth. Techniques range from breath-focused meditation to mantra chanting, visualization, and mindfulness. Regular meditation reduces stress, improves focus, and cultivates emotional balance.",
    benefits: "Reduces anxiety and depression, improves concentration, enhances emotional resilience, lowers blood pressure, promotes better sleep, and fosters spiritual connection.",
    practices: "Breath awareness (Anapanasati) focusing on natural breath flow, mantra meditation repeating sacred sounds like Om or So Hum, guided visualization imagining peaceful scenes, body scan meditation releasing tension from each body part, loving-kindness meditation (Metta) cultivating compassion, Vipassana observing sensations without judgment.",
    traditions: "Meditating at sunrise or sunset, sitting in lotus position, using mala beads for counting mantras, practicing in silence."
  },
  "natural-remedies": {
    name: "Natural Remedies & Home Care",
    mainImage: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    description: "Indian households have relied on natural remedies for centuries to treat common ailments and maintain health. These remedies use kitchen ingredients like turmeric, honey, ginger, tulsi, and neem. Passed down through generations, they offer safe, effective alternatives to modern medicine for minor health issues.",
    benefits: "Natural, chemical-free healing, easily accessible ingredients, cost-effective, gentle on the body, and effective for prevention and treatment.",
    practices: "Turmeric milk (Haldi Doodh) with warm milk turmeric and honey for immunity and inflammation, ginger tea for nausea indigestion and sore throat, tulsi (holy basil) tea for respiratory health fever and stress, honey and lemon in warm water for digestion detox and immunity, neem paste or water for acne infections and skin irritation, ajwain (carom seeds) for bloating and indigestion.",
    traditions: "Keeping a home herbal pharmacy, using coconut oil for hair and skin, applying sandalwood paste for cooling, drinking kadha (herbal decoction) during illness."
  }
};

export default function LifestyleTopic() {
  const { topicId } = useParams();
  
  console.log("LifestyleTopic rendered");
  console.log("topicId from URL:", topicId);
  console.log("Available topics:", Object.keys(topicData));
  
  const topic = topicData[topicId];

  if (!topic) {
    return (
      <div className="destination-not-found">
        <h1>Topic not found</h1>
        <p>Sorry, we couldn't find information about this topic.</p>
        <p>Looking for: {topicId}</p>
        <Link to="/lifestyle-wellness" className="btn btn-primary">
          ← Back to Lifestyle & Wellness
        </Link>
      </div>
    );
  }

  return (
    <div className="destination-detail">
      <div className="destination-header">
        <img 
          src={topic.mainImage} 
          alt={topic.name}
          className="main-image"
        />
        <h1 className="destination-title">{topic.name}</h1>
      </div>

      <section className="destination-section">
        <h2 className="section-title">About</h2>
        <p className="destination-description">{topic.description}</p>
      </section>

      <section className="destination-section">
        <h2 className="section-title">Benefits</h2>
        <p className="destination-description">{topic.benefits}</p>
      </section>

      <section className="destination-section">
        <h2 className="section-title">Popular Practices</h2>
        <p className="destination-description">{topic.practices}</p>
      </section>

      <section className="destination-section">
        <h2 className="section-title">Traditions</h2>
        <p className="destination-description">{topic.traditions}</p>
      </section>

      <div className="back-button-container">
        <Link to="/lifestyle-wellness" className="btn btn-primary back-button">
          ← Back to Lifestyle & Wellness
        </Link>
      </div>
    </div>
  );
}
