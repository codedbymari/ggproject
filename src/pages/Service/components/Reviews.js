// src/pages/Service/components/Reviews.js
import React from 'react';
import './Reviews.css';

// Generic profile avatar SVG component
const ProfileAvatar = ({ initials, color }) => {
  // Generate a consistent color based on initials
  const getColor = (initials) => {
    const colors = [
      '#4F46E5', // Indigo
      '#0891B2', // Cyan
      '#059669', // Emerald
      '#D97706', // Amber
      '#DC2626', // Red
      '#7C3AED', // Violet
      '#2563EB', // Blue
      '#DB2777', // Pink
    ];
    
    // Simple hash function to get consistent color for same initials
    const hash = initials.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + acc;
    }, 0);
    
    return color || colors[hash % colors.length];
  };
  
  const bgColor = getColor(initials);
  
  return (
    <svg 
      className="reviewer-avatar" 
      viewBox="0 0 40 40" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="20" fill={bgColor} />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".35em"
        fontSize="16"
        fontWeight="bold"
        fill="white"
      >
        {initials}
      </text>
    </svg>
  );
};

const Reviews = () => {
  // BACKEND INTEGRATION POINT:
  // This would fetch reviews from your backend API
  
  // dummy reviews data
  const reviews = [
    {
      id: 1,
      author: "Amina Ibrahim",
      rating: 5,
      date: "2024-10-15",
      content: "Absolutely loved my experience! The service was professional and the results exceeded my expectations. Will definitely be coming back."
    },
    {
      id: 2,
      author: "Oluwaseun Adeyemi",
      rating: 4,
      date: "2024-09-28",
      content: "Great service and friendly staff. The only reason I'm not giving 5 stars is because I had to wait a bit longer than my appointment time."
    },
    {
      id: 3,
      author: "Ngozi Okafor",
      rating: 5,
      date: "2024-09-10",
      content: "I've been coming here for years and have never been disappointed. They always listen to what I want and deliver amazing results."
    },
    {
      id: 4,
      author: "Yusuf Musa",
      rating: 5,
      date: "2025-01-22",
      content: "Excellent service! The attention to detail was impressive. I recommend this to anyone looking for quality service in Lagos."
    },
    {
      id: 5,
      author: "Folake Adeleke",
      rating: 4,
      date: "2025-04-05",
      content: "Very professional and the atmosphere was welcoming. I'll definitely be returning soon for more services."
    }
  ];
  
  // Helper function to get initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const roundedRating = Math.round(averageRating * 10) / 10; // Round to 1 decimal place
  
  return (
    <div className="reviews-section">
      <h2>Reviews</h2>
      <div className="reviews-summary">
        <div className="average-rating">
          <span className="rating-number">{roundedRating}</span>
          <div className="stars">
            {[1, 2, 3, 4, 5].map(star => (
              <i 
                key={star} 
                className={`fa fa-star ${star <= roundedRating ? 'filled' : ''}`}
              ></i>
            ))}
          </div>
          <span className="review-count">Based on {reviews.length} reviews</span>
        </div>
        <button className="write-review-button">
          Write a Review
        </button>
      </div>
      
      <div className="reviews-list">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <div className="reviewer-info">
                <ProfileAvatar initials={getInitials(review.author)} />
                <div className="reviewer-details">
                  <div className="reviewer-name">{review.author}</div>
                  <div className="review-date">{new Date(review.date).toLocaleDateString()}</div>
                </div>
              </div>
              <div className="review-rating">
                {[1, 2, 3, 4, 5].map(star => (
                  <i 
                    key={star} 
                    className={`fa fa-star ${star <= review.rating ? 'filled' : ''}`}
                  ></i>
                ))}
              </div>
            </div>
            <div className="review-content">
              {review.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;