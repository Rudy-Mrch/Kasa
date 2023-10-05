import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating = 0 }) => {
  const maxRating = 5;
  const starIcon = [];

  const ratingLength = rating < 0 ? 0 : rating >= 5 ? maxRating : rating;

  for (let i = 1; i <= maxRating; i++) {
    if (i <= ratingLength) {
      starIcon.push(<FontAwesomeIcon icon={faStar} className="star-complet" key={i} />);
    } else {
      starIcon.push(<FontAwesomeIcon icon={faStar} className="star" key={i} />);
    }
  }

  return <div className='Rating'>{starIcon}</div>;
};

export default Rating;
