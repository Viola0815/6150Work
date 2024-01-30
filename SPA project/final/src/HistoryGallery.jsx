import React, { useState } from 'react';
import './HistoryGallery.css';

const allItems = [
  { id: 'Statue Of Liberty National Monument photo 1', category: 'Statue Of Liberty National Monument', image: '/images/Statue Of Liberty National Monument1.jpg' },
  { id: 'City View 1', category: 'City View', image: '/images/cityview1.jpg' },
  { id: 'Statue Of Liberty National Monument photo 2', category: 'Statue Of Liberty National Monument', image: '/images/Statue Of Liberty National Monument2.jpg' },
  { id: 'City View 2', category: 'City View', image: '/images/cityview2.jpg'},
];

function HistoryGallery() {
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
      <button onClick={handleToggleGallery} aria-label="History Image Gallery">
      {showGallery ? 'Close Gallery ❌' : 'Show Gallery ⚪'}
      </button>
      {showGallery && (
        <>
          <h2>Image Gallery</h2>
          <div className='filter-buttons'>
            <button className={`filter-button ${selectedCategory === 'All' ? 'selected' : ''}`} onClick={() => handleCategoryChange('All')}>All</button>
            <button className={`filter-button ${selectedCategory === 'Statue Of Liberty National Monument' ? 'selected' : ''}`} onClick={() => handleCategoryChange('Statue Of Liberty National Monument')}>Statue Of Liberty National Monument</button>
            <button className={`filter-button ${selectedCategory === 'City View' ? 'selected' : ''}`} onClick={() => handleCategoryChange('City View')}>City View</button>
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

export default HistoryGallery;
