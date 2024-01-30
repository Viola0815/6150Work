import React, { useState } from 'react';
import './NYClifeGallery.css';

const allItems = [
  { id: 'Entertainment photo 1', category: 'Entertainment', image: '/images/Entertainment photo 1.jpg' },
  { id: 'Travel photo 1', category: 'Travel', image:'/images/travel1.jpg' },
  { id: 'Work photo 1', category: 'Work', image:'/images/work1.jpg' },
  { id: 'Food photo 1', category: 'Food', image: '/images/food1.jpg'},
  { id: 'Food photo 2', category: 'Food', image: '/images/food2.jpg' },
  { id: 'Food photo 3', category: 'Food', image:'/images/food3.jpg' },
  { id: 'Entertainment photo 2', category: 'Entertainment', image: '/images/Entertainment photo 2.jpg' },
  { id: 'Entertainment photo 3', category: 'Entertainment', image: '/images/Entertainment photo 3.jpg' },
  { id: 'Travel photo 2', category: 'Travel', image: '/images/travel2.jpg'},
  { id: 'Work photo 2', category: 'Work', image: '/images/work2.jpg'},

];

function NYClifeGallery() {
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
      <button onClick={handleToggleGallery} aria-label="NYC life Image Gallery">
      {showGallery ? 'Close Gallery ❌' : 'Show Gallery ⚪'}
      </button>
      {showGallery && (
        <>
          <h2>NYC Life Gallery</h2>
          <div className='filter-buttons'>
            <button className={`filter-button ${selectedCategory === 'All' ? 'selected' : ''}`} onClick={() => handleCategoryChange('All')}>All</button>
            <button className={`filter-button ${selectedCategory === 'Entertainment' ? 'selected' : ''}`} onClick={() => handleCategoryChange('Entertainment')}>Entertainment</button>
            <button className={`filter-button ${selectedCategory === 'Travel' ? 'selected' : ''}`} onClick={() => handleCategoryChange('Travel')}>Travel</button>
            <button className={`filter-button ${selectedCategory === 'Work' ? 'selected' : ''}`} onClick={() => handleCategoryChange('Work')}>Work</button>
            <button className={`filter-button ${selectedCategory === 'Food' ? 'selected' : ''}`} onClick={() => handleCategoryChange('Food')}>Food</button>
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

export default NYClifeGallery;
