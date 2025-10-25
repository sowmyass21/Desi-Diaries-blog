import './App.css';
import { useNavigate, useLocation } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogContent from './pages/BlogContent'  // ✅ FIXED PATH
import AuthenticIndia from "./pages/AuthenticIndia";
import CuisineIndividual from "./pages/CuisineIndividual";
import TravelTourism from './pages/TravelandTourism'; 
import TravelDestination from "./pages/TravelDestination";  
import FestivalsAndTraditions from './pages/Culture';
import FestivalIndividual from "./pages/FestivalIndividual";
import LifestyleWellness from "./pages/LifestyleandWellness";
import LifestyleTopic from './pages/LifestyleTopic';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
function AppHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Define main section pages where back button should appear
  const mainSectionPages = [
    '/authentic-india',
    '/festivals-traditions',
    '/lifestyle-wellness',
    '/travel-tourism'
  ];
  
  // Check if current page is a main section page
  const isMainSectionPage = mainSectionPages.includes(location.pathname);

  return (
    <header className='header'>
      <nav>
        {/* Logo/Brand - Left side */}
        <Link to="/" className="blog-brand">
          <div>
            <div className="blog-name">Desi Diaries</div>
            <div className="blog-tagline">Culture • Travel • Wellness</div>
          </div>
        </Link>

        {/* Navigation Links - Right side */}
        <ul className="nav-links">
          {/* Back button - only on main section pages */}
          {isMainSectionPage && (
            <li>
              <button 
                onClick={() => navigate('/')} 
                className="back-arrow"
                aria-label="Go back to home"
              >
                ← Back
              </button>
            </li>
          )}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
function App() {
  
  return (
    <Router>  {/* ✅ Router wraps everything */}
      <div className='container'>
        <AppHeader/>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<BlogContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/authentic-india" element={<AuthenticIndia />} />
          <Route path="/cuisine/:cuisineId" element={<CuisineIndividual />} />
          <Route path="/travel-tourism" element={<TravelTourism />} />
          <Route path="/destination/:destinationId" element={<TravelDestination />} />
          <Route path="/festival/:festivalId" element={<FestivalIndividual />} />
          <Route path="/festivals-traditions" element={<FestivalsAndTraditions/>} />
          <Route path="/lifestyle/:topicId" element={<LifestyleTopic />} />
          <Route path="/lifestyle-wellness" element={<LifestyleWellness />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
