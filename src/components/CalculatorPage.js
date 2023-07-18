import React from 'react';
import Navbar from './NavBar';
import Calculator from './Calculator';
import './CalculatorPage.css';

const CalculatorPage = () => (
  <div>
    <Navbar />
    <main>
      <h2>Let&apos;s do some Math!</h2>
      <Calculator />
    </main>
  </div>
);

export default CalculatorPage;
