import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Modal from './Modal';
import Button from './Button';
import Page4 from './Page4';
import ThemeButton from './ThemeButton';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('page1');
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setIsMenuClicked(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'page1':
        return <Page1 />;
      case 'page2':
        return <Page2 />;
      case 'page3':
        return <Page3 setCurrentPage={setCurrentPage} />;
      case 'page4':
        return <Page4 />;
      default:
        return <Page1 />;
    }
  };

  return (
    <div className={`${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <a href="#page-content" class="skip-link" aria-label="Skip to the main content">Skip to the main content</a>
      <Header />
      <nav className="title-buttons-container">
        <div className="buttons">
          <Button type="button" visual="button" onClick={() => handlePageChange('page1')}aria-label="Navigate to NYC History Page">
            NYC History
          </Button>
          <Button type="button" visual="button" onClick={() => handlePageChange('page2')}aria-label="Navigate to NYC Weather Page">
            NYC Weather
          </Button>
          <Button type="button" visual="button" onClick={() => handlePageChange('page3')}aria-label="Navigate to NYC Life Page">
            NYC Life
          </Button>
          <Button type="button" visual="button" onClick={() => handlePageChange('page4')}aria-label="Navigate to NYC Education Page">
            NYC Education
          </Button>
        </div>
      </nav>

      <div className="mobile-menu">
        <div className="dropdown-button" onClick={handleMenuClick}>
          <button className="dropdown-label" aria-label="menu button">&#9776;</button>
          {isMenuClicked && (
            <div className="dropdown-options">
              <div onClick={() => handlePageChange('page1')} aria-label="Navigate to NYC History Page">NYC History</div>
              <div onClick={() => handlePageChange('page2')} aria-label="Navigate to NYC Weather Page">NYC Weather</div>
              <div onClick={() => handlePageChange('page3')} aria-label="Navigate to NYC Life Page">NYC Life</div>
              <div onClick={() => handlePageChange('page4')} aria-label="Navigate to NYC Education Page">NYC Education</div>
            </div>
          )}
        </div>
      </div>

      <ThemeButton toggleTheme={toggleTheme} 
      isDarkTheme={isDarkTheme}
      aria-label={isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"} />
      
      <div className="content">{renderPage()}</div>

      <div className="buttons">
        <Button type="button" visual="button" onClick={handleOpenModal} aria-label="Register for more information">
          Click To Register For More Info
        </Button>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} handleSubmit={handleCloseModal}  aria-label="Register for More Information"/>
      </div>
     
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
