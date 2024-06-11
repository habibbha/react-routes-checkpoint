import React, { useState } from 'react';

const Filter = ({ filterMovies }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    filterMovies(e.target.value, rating);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    filterMovies(title, e.target.value);
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
