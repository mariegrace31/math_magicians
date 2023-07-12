import Buttons from './Button';
import Result from './Result';
import './Calculator.css';

function Calculator() {
  return (
    <div className="Calc-container">
      <Result />
      <Buttons />
    </div>
  );
}

export default Calculator;
