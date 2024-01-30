
import './Button.css';
import React from 'react';

function Button({ type, visual, onClick, children }) {
  const buttonClassName = visual === 'link' ? 'link-button' : 'default-button';

  return (
    <button type={type} className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
