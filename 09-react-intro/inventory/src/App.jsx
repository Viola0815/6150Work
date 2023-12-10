import React, { useState } from 'react';
import Reorder from './Reorder';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function Increase() {
    setCount(count + 1);
  }

  function Decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleReorder() {
    setCount(5);
  }

  return (
    <div className="app-container">
      <p className="count-display">Inventory Count: {count}</p>
      <div className="button-container">
        <button className="action-button" onClick={Decrease} disabled={!count}>
          -
        </button>
        <button className="action-button" onClick={Increase}>
          +
        </button>
        <div className="Reorder-button">
        {count === 0 && <Reorder onReorder={handleReorder} />}
        </div>
      </div> 
    </div>
  );
}

export default App;
