import React, { useState } from 'react';
import Buttons from './Button';
import Result from './Result';
import './Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [displayData, setDisplayData] = useState(
    {
      total: 0,
      next: null,
      operation: null,
    },
  );
  const resultData = (buttonClick) => {
    const newData = calculate(displayData, buttonClick);
    setDisplayData(newData);
  };
  return (
    <div className="Calc-container">
      <Result show={displayData} />
      <Buttons handleClick={resultData} />
    </div>
  );
}

export default Calculator;
