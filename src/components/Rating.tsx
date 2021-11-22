import { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="margin-bottom">
      <div className="star-rating">
        {stars.map((star) => {
          star += 1;
          return (
            <button
              type="button"
              key={star}
              className={star <= (hover || rating) ? 'on' : 'off'}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Rating;
