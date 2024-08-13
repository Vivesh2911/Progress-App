import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [history, setHistory] = useState([0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIncrement = () => {
    if (number < 150) {
      const newNumber = number + 1;
      updateState(newNumber);
    }
  };

  const handleDecrement = () => {
    if (number > 0) {
      const newNumber = number - 1;
      updateState(newNumber);
    }
  };

  const updateState = (newNumber) => {
    const newHistory = history.slice(0, currentIndex + 1);
    setHistory([...newHistory, newNumber]);
    setNumber(newNumber);
    setCurrentIndex(currentIndex + 1);
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      setNumber(history[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      setNumber(history[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="App">
      <h1>Number: {number}</h1>
      <div className="button-container">
        <button onClick={handleDecrement}>-1</button>
        <button onClick={handleIncrement}>+1</button>
      </div>
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${(number / 150) * 100}%` }}
        ></div>
      </div>
      <div className="undo-redo-container">
        <button onClick={handleUndo} disabled={currentIndex === 0}>
          Undo
        </button>
        <button onClick={handleRedo} disabled={currentIndex === history.length - 1}>
          Redo
        </button>
      </div>
    </div>
  );
}

export default App;
