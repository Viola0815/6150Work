import React, { useState } from 'react';
import './WeatherGallery.css';

const allItems = [
    { id: 'Spring photo', category: 'Spring', image: '/images/spring.jpg'},
    { id: 'Summer photo', category: 'Summer', image: '/images/summer.jpg' },
    { id: 'Fall photo', category: 'Fall', image: '/images/fall.jpg' },
    { id: 'Winter photo', category: 'Winter', image:'/images/winter.jpg'},
];
function WeatherGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showGallery, setShowGallery] = useState(false);

  const filteredItems = selectedCategory === 'All'
    ? allItems
    : allItems.filter(item => item.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleToggleGallery = () => {
    setShowGallery(prevState => !prevState);
  };

  return (
    <div>
      <button onClick={handleToggleGallery} aria-label="Weather Image Gallery">
        {showGallery ? 'Close Gallery ❌' : 'Show Gallery ⚪'}
      </button>
      {showGallery && (
        <>
          <h2>Weather Gallery</h2>
          <div className='filter-buttons'>
            <button className={`filter-button ${selectedCategory === 'All' ? 'selected' : ''}`} onClick={() => handleCategoryChange('All')}>All</button>
            <button className={`filter-button ${selectedCategory === 'Spring' ? 'selected' : ''}`} onClick={() => handleCategoryChange('Spring')}>Spring</button>
            <button className={`filter-button ${selectedCategory === 'Summer' ? 'selected' : ''}`} onClick={() => handleCategoryChange('Summer')}>Summer</button>
            <button className={`filter-button ${selectedCategory === 'Fall' ? 'selected' : ''}`} onClick={() => handleCategoryChange('Fall')}>Fall</button>
            <button className={`filter-button ${selectedCategory === 'Winter' ? 'selected' : ''}`} onClick={() => handleCategoryChange('Winter')}>Winter</button>
          </div>
          <div className='image-container'>
            {filteredItems.map(item => (
              <div key={item.id} className='gallery-item'>
                <img src={item.image} alt={`Image ${item.id}`} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherGallery;
