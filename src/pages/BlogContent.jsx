import React from "react";
import './BlogContent.css';
import { Link } from "react-router-dom";

export default function BlogContent() {
  console.log("BlogContent component rendered"); // Debugging

  const blogItems = [
    {
      id: 1,
      title: "Authentic Indian Cuisine",
      image: "https://plus.unsplash.com/premium_photo-1672153937750-9ea567e94026?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29va2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      alt: "Indian cooking and traditional cuisine",
      route: "/authentic-india",
      available: true
    },
    {
      id: 2,
      title: "Travel and Tourism in India",
      image: "https://plus.unsplash.com/premium_vector-1711987478533-5aa44c500e90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
      alt: "Travel destinations and tourism in India",
      route: "/travel-tourism",
      available: true
    },
    {
      id: 3,
      title: "Cultural Festivals and Traditions",
      image: "https://plus.unsplash.com/premium_vector-1724253389492-031df8839012?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q3VsdHVyYWwlMjBGZXN0aXZhbHMlMjBhbmQlMjBUcmFkaXRpb25zJTIwaW4lMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
      alt: "Cultural festivals and traditional celebrations in India",
      route: "/festivals-traditions",
      available: true
    },
    {
      id: 4,
      title: "Lifestyle and Wellness",
      image: "https://plus.unsplash.com/premium_vector-1730043033331-3b88d33ef95a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fExpZmVzdHlsZSUyMGFuZCUyMFdlbGxuZXNzJTIwaW4lMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
      alt: "Lifestyle tips and wellness practices in India",
      route: "/lifestyle-wellness",
      available: true
    }
  ];

  return (
  <div className="blog-grid-container">
    {blogItems.map((blog) => (
      <div className="blogcontent" key={blog.id}>
        <img 
          className="image" 
          src={blog.image} 
          alt={blog.alt}
          onError={(e) => {
            console.error(`Image failed to load: ${blog.title}`);
            e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found";
          }}
        />
        <div className="blog-text-section">
          <h2 className="blog-title">{blog.title}</h2>
          {blog.available ? (
            <Link 
              to={blog.route} 
              className="btn btn-primary button"
              onClick={() => console.log(`Navigating to: ${blog.route}`)}
            >
              Explore
            </Link>
          ) : (
            <button 
              className="btn btn-secondary button" 
              disabled
              title="Coming Soon"
            >
              Coming Soon
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
);
}
