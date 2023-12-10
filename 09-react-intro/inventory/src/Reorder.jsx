import React from 'react';
import './Reorder.css'; 

const Reorder = ({ onReorder }) => {
  return (
    <div className="reorder-container">
      <button className="reorder-button" onClick={onReorder}>Reorder</button>
    </div>
  );
};

export default Reorder;
