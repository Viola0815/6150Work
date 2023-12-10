
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Modal from './Modal';
import Button from './Button';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('page1');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'page1':
        return <Page1 />;
      case 'page2':
        return <Page2 />;
      case 'page3':
        return <Page3 setCurrentPage={setCurrentPage} />;
      default:
        return <Page1 />;
    }
  };

  return (
    <div>
      <Header />

      <div className="title-buttons-container">
        <div className="buttons">
          <Button type="button" visual="button" onClick={() => setCurrentPage('page1')}>
            NYC History
          </Button>
          <Button type="button" visual="button" onClick={() => setCurrentPage('page2')}>
            NYC Weather
          </Button>
          <Button type="button" visual="button" onClick={() => setCurrentPage('page3')}>
            NYC Life
          </Button>
        </div>
      </div>

      <div className="content">{renderPage()}</div>

      <div className="buttons">
        <Button type="button" visual="button" onClick={handleOpenModal}>Click To Register For More Info</Button>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} handleSubmit={handleCloseModal} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
