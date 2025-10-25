import React from "react";
import { Link, useParams } from "react-router-dom";
import "./blogcontent.css";

const festivalData = {
  "diwali": {
    name: "Diwali",
    mainImage: "https://images.pexels.com/photos/7121494/pexels-photo-7121494.jpeg",
    history: "Diwali, the Festival of Lights, is one of the most significant Hindu festivals celebrated across India and the world. The festival celebrates the victory of light over darkness, good over evil, and knowledge over ignorance. The word 'Diwali' comes from the Sanskrit word 'Deepavali,' meaning 'row of lights.' The festival commemorates Lord Rama's return to Ayodhya after 14 years of exile and his victory over demon king Ravana.",
    significance: "Celebrated over five days, Diwali symbolizes new beginnings, prosperity, and the triumph of righteousness. People worship Goddess Lakshmi for wealth and prosperity, light oil lamps (diyas), burst firecrackers, exchange sweets, and decorate homes with rangoli patterns.",
    celebrations: [
      { title: "Day 1 - Dhanteras", description: "People buy gold, silver, and new utensils. Homes are cleaned and decorated." },
      { title: "Day 2 - Naraka Chaturdashi", description: "Also called Choti Diwali, people light diyas and burst crackers." },
      { title: "Day 3 - Lakshmi Puja", description: "Main Diwali day. Goddess Lakshmi is worshipped for prosperity and wealth." },
      { title: "Day 4 - Govardhan Puja", description: "Celebrates Lord Krishna lifting Govardhan mountain." },
      { title: "Day 5 - Bhai Dooj", description: "Sisters apply tilak on brothers' foreheads and pray for their long life." }
    ],
    traditions: "Lighting diyas and candles, creating rangoli designs, exchanging gifts and sweets, wearing new clothes, family gatherings, fireworks displays.",
    regionalVariations: "North India celebrates Ram's return, South India celebrates Krishna's victory over Narakasura, West India marks it as the new year, East India worships Goddess Kali."
  },
  "holi": {
    name: "Holi",
    mainImage: "https://images.pexels.com/photos/12377770/pexels-photo-12377770.jpeg",
    history: "Holi, the Festival of Colors, is an ancient Hindu festival celebrating the arrival of spring, love, and the victory of good over evil. It commemorates the divine love of Radha and Krishna and the story of Prahlad's devotion that saved him from his evil father and aunt Holika. The festival has been celebrated for centuries and is mentioned in ancient texts like Narad Purana and Bhavishya Purana.",
    significance: "Holi represents the end of winter and the beginning of spring. It's a time to forgive, forget past conflicts, and celebrate with loved ones. The colorful festival breaks social barriers and brings people together regardless of caste, creed, or status.",
    celebrations: [
      { title: "Holika Dahan", description: "The night before Holi, bonfires are lit to symbolize the burning of evil Holika and the victory of devotion." },
      { title: "Rangwali Holi", description: "The main day when people play with colors (gulal), water balloons, and colored water." },
      { title: "Music and Dance", description: "Traditional songs, dhol beats, and folk dances like 'Raas Leela' are performed." },
      { title: "Special Foods", description: "Gujiya, malpua, thandai, puran poli, and other festive delicacies are prepared." }
    ],
    traditions: "Throwing colored powder (gulal), splashing colored water, singing and dancing, consuming bhang (cannabis-based drink), enjoying festive sweets.",
    regionalVariations: "Mathura and Vrindavan celebrate for over a week, Uttarakhand's Kumaoni Holi features musical celebrations, Punjab celebrates Hola Mohalla with martial arts displays."
  },
  "navratri": {
    name: "Navratri",
    mainImage: "https://images.pexels.com/photos/19124086/pexels-photo-19124086.jpeg",
    history: "Navratri, meaning 'nine nights,' is a Hindu festival dedicated to worshipping Goddess Durga and her nine forms. Celebrated four times a year, the most significant is Sharad Navratri in autumn. The festival commemorates Goddess Durga's victory over the buffalo demon Mahishasura, symbolizing the triumph of good over evil.",
    significance: "Each of the nine nights is dedicated to a different form of Goddess Durga - Shailaputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kalaratri, Mahagauri, and Siddhidatri. The festival represents spiritual cleansing, renewal, and devotion.",
    celebrations: [
      { title: "Garba and Dandiya", description: "Traditional folk dances performed in circles with colorful attire and rhythmic music, especially popular in Gujarat." },
      { title: "Kolu/Golu Display", description: "In South India, decorative displays of dolls depicting gods, goddesses, and life scenes are arranged." },
      { title: "Fasting", description: "Devotees observe fasts, consuming only specific foods like fruits, milk, and sabudana preparations." },
      { title: "Durga Puja", description: "Elaborate worship rituals with flowers, incense, and offerings to the goddess." }
    ],
    traditions: "Wearing traditional attire in nine different colors each day, performing aarti, maintaining strict vegetarian diet, reciting mantras and hymns.",
    regionalVariations: "Gujarat is famous for Garba nights, West Bengal celebrates as Durga Puja, South India focuses on Kolu displays and special prayers."
  },
  "durga-puja": {
    name: "Durga Puja",
    mainImage: "https://images.pexels.com/photos/34421587/pexels-photo-34421587.jpeg",
    history: "Durga Puja is the grandest festival of West Bengal, celebrating Goddess Durga's victory over the demon Mahishasura. The festival has roots dating back centuries, with historical evidence suggesting celebrations since the 16th century. It commemorates the goddess's visit to her parental home with her children - Lakshmi, Saraswati, Ganesha, and Kartikeya.",
    significance: "Beyond religious significance, Durga Puja is a social and cultural phenomenon in Bengal. It represents the victory of good over evil and celebrates feminine power (Shakti). UNESCO has recognized Durga Puja as an Intangible Cultural Heritage of Humanity.",
    celebrations: [
      { title: "Pandal Decorations", description: "Elaborate temporary structures (pandals) are built with creative themes, artistic installations, and beautiful idols." },
      { title: "Pushpanjali", description: "Devotees offer flowers to the goddess during morning prayers with mantras and hymns." },
      { title: "Cultural Programs", description: "Music, dance, drama performances, and cultural events take place throughout the festival." },
      { title: "Visarjan", description: "On the final day, idols are immersed in rivers or water bodies amid chanting and music." }
    ],
    traditions: "Wearing new clothes (especially on Ashtami and Navami), enjoying bhog (prasad), pandal hopping, dhak drumming, cultural performances.",
    regionalVariations: "West Bengal has the most elaborate celebrations, Odisha celebrates as Durga Puja and Kumar Purnima, Assam observes it as Durga Puja with regional customs."
  },
  "eid": {
    name: "Eid-ul-Fitr",
    mainImage: "https://images.pexels.com/photos/7249733/pexels-photo-7249733.jpeg",
    history: "Eid-ul-Fitr marks the end of Ramadan, the Islamic holy month of fasting. The festival was established by Prophet Muhammad after he migrated to Medina. It celebrates spiritual renewal, gratitude, and community bonding. The date is determined by the sighting of the new moon, making it a lunar festival.",
    significance: "Eid-ul-Fitr celebrates the completion of a month-long spiritual journey of fasting, prayer, and self-reflection. It's a time of thanksgiving to Allah for the strength to complete the fast, forgiveness, charity, and celebrating with family and community.",
    celebrations: [
      { title: "Eid Prayer", description: "Special congregational prayers (Salat al-Eid) are performed in mosques or open grounds early in the morning." },
      { title: "Zakat al-Fitr", description: "Mandatory charity is given to the poor before Eid prayers to ensure everyone can celebrate." },
      { title: "Festive Meals", description: "Special dishes like biryani, sheer khurma (vermicelli pudding), kebabs, and sewaiyan are prepared." },
      { title: "Visiting and Gifting", description: "People visit relatives and friends, exchange gifts (Eidi), especially money to children." }
    ],
    traditions: "Wearing new or best clothes, applying mehndi, preparing sewaiyan and other delicacies, exchanging 'Eid Mubarak' greetings.",
    regionalVariations: "Delhi and Lucknow are famous for grand Eid celebrations, Hyderabad offers special biryani feasts, Kashmir has unique traditional preparations."
  },
  "christmas": {
    name: "Christmas",
    mainImage: "https://images.pexels.com/photos/1656564/pexels-photo-1656564.jpeg",
    history: "Christmas in India celebrates the birth of Jesus Christ on December 25th. Christianity arrived in India with St. Thomas the Apostle in 52 AD in Kerala. Later, Portuguese and British colonial influence spread Christmas traditions across India. Today, it's celebrated not only by Christians but by people of all faiths as a festival of joy and giving.",
    significance: "Christmas commemorates the birth of Jesus Christ in Bethlehem. It represents love, peace, compassion, and the spirit of giving. In India's multicultural society, Christmas has become a secular celebration enjoyed by people of all religions.",
    celebrations: [
      { title: "Midnight Mass", description: "Churches hold special midnight services on Christmas Eve with prayers, hymns, and carol singing." },
      { title: "Christmas Tree and Decorations", description: "Homes and churches are decorated with Christmas trees, stars, lights, and nativity scenes." },
      { title: "Carol Singing", description: "Groups go door-to-door singing Christmas carols and spreading festive cheer." },
      { title: "Feast and Gifts", description: "Families prepare special meals, exchange gifts, and celebrate with cakes and sweets." }
    ],
    traditions: "Decorating Christmas trees, hanging stockings, exchanging gifts, preparing plum cakes, attending church services, singing carols.",
    regionalVariations: "Goa has Portuguese-influenced celebrations with midnight mass and festivities, Kerala's Christian communities celebrate with elaborate feasts, Northeast India, especially Meghalaya and Nagaland, have grand celebrations."
  }
};

export default function FestivalIndividual() {
  const { festivalId } = useParams();
  const festival = festivalData[festivalId];

  if (!festival) {
    return (
      <div className="destination-not-found">
        <h1>Festival not found</h1>
        <p>Sorry, we couldn't find information about this festival.</p>
        <Link to="/festivals-traditions" className="btn btn-primary">
          Back to Festivals
        </Link>
      </div>
    );
  }

  return (
    <div className="destination-detail">
      <div className="destination-header">
        <img 
          src={festival.mainImage} 
          alt={festival.name}
          className="main-image"
        />
        <h1 className="destination-title">{festival.name}</h1>
      </div>

      <section className="destination-section">
        <h2 className="section-title">History and Origins</h2>
        <p className="destination-description">{festival.history}</p>
      </section>

      <section className="destination-section">
        <h2 className="section-title">Significance</h2>
        <p className="destination-description">{festival.significance}</p>
      </section>

      <section className="destination-section">
        <h2 className="section-title">Celebrations</h2>
        {festival.celebrations.map((celebration, index) => (
          <p key={index} className="destination-description">
            <strong>{celebration.title}:</strong> {celebration.description}
          </p>
        ))}
      </section>

      <section className="destination-section">
        <h2 className="section-title">Traditions and Customs</h2>
        <p className="destination-description">{festival.traditions}</p>
      </section>

      <section className="destination-section">
        <h2 className="section-title">Regional Variations</h2>
        <p className="destination-description">{festival.regionalVariations}</p>
      </section>

      <div className="back-button-container">
        <Link to="/festivals-traditions" className="btn btn-primary back-button">
          ← Back to Festivals
        </Link>
      </div>
    </div>
  );
}
