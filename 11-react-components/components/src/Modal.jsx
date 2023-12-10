import React, { useState } from 'react';
import Button from './Button';
import './Modal.css';

function Modal({ isOpen, onClose, handleSubmit }) {
  if (!isOpen) return null;

  const [error, setError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const nameValue = e.target.querySelector('input[type="text"]').value;
    const emailValue = e.target.querySelector('input[type="email"]').value;

    if (!nameValue || !emailValue) {
      setError('Please fill in both Name and Email fields.');
    } else {
      setError('');
      handleSubmit(e);
    }
  };

  
  return (
    <>
      <div className={`overlay ${isOpen ? 'visible' : ''}`} > </div>
      <dialog open={isOpen} onClose={onClose}>
        <form onSubmit={submitHandler}>
          <label>
            Your Name:*
            <input type="text" />
          </label>
          <label>
            Your Email:*
            <input type="email" />
          </label>
          <div className="bts">
            <Button type="submit" visual="link">
              Submit
            </Button>
            <div className="closingTag">
              <Button type="button" visual="button" onClick={onClose}>
                &#10060;
              </Button>
            </div>
          </div>
          {error && <div className="error-message">{error}</div>}
        </form>
      </dialog>
    </>
  );
}

export default Modal;
