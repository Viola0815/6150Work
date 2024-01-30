import React, { useState } from 'react';
import './EducationGallery.css';

const allItems = [
  { id: 'Columbia University photo 1', category: 'Columbia University', image: '/images/columbia1.jpg' },
  { id: 'New York University photo 1', category: 'New York University', image: '/images/NYU1.jpg' },
  { id: 'New York School of Visual Arts photo 1', category: 'New York School of Visual Arts', image: '/images/SVA1.jpg'  },
  { id: 'Columbia University photo 2', category: 'Columbia University', image: '/images/columbia2.jpg' },
  { id: 'New York University photo 2', category: 'New York University', image: '/images/NYU2.jpg'},
  { id: 'New York School of Visual Arts photo 2', category: 'New York School of Visual Arts', image: '/images/SVA2.jpg' },
];

function EducationGallery() {
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
      <button onClick={handleToggleGallery} aria-label="Education Image Gallery">
        {showGallery ? 'Close Gallery ❌' : 'Show Gallery ⚪'}
      </button>
      {showGallery && (
        <>
          <h2>Education Gallery</h2>
          <div className='filter-buttons'>
            <button className={`filter-button ${selectedCategory === 'All' ? 'selected' : ''}`} onClick={() => handleCategoryChange('All')}>All</button>
            <button className={`filter-button ${selectedCategory === 'Columbia University' ? 'selected' : ''}`} onClick={() => handleCategoryChange('Columbia University')}>Columbia University</button>
            <button className={`filter-button ${selectedCategory === 'New York University' ? 'selected' : ''}`} onClick={() => handleCategoryChange('New York University')}>New York University</button>
            <button className={`filter-button ${selectedCategory === 'New York School of Visual Arts' ? 'selected' : ''}`} onClick={() => handleCategoryChange('New York School of Visual Arts')}>New York School of Visual Arts</button>
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

export default EducationGallery;
