import './Buttons.css';
import PropTypes from 'prop-types';

Text.propTypes = {
  handleClick: PropTypes.node.isRequired,
};

function Buttons({handleClick}) {
  return (
    <div className="buttons">
      <button type="button" className="button" onClick={() => { handleClick('AC'); }}>AC</button>
      <button type="button" className="button" onClick={() => { handleClick('+/-'); }}>+/-</button>
      <button type="button" className="button" onClick={() => { handleClick('%'); }}>%</button>
      <button type="button" className="right-button" onClick={() => {handleClick('÷'); }}>&#247;</button>
      <button type="button" className="button" onClick={() => {handleClick('7'); }}>7</button>
      <button type="button" className="button" onClick={() => {handleClick('8'); }}>8</button>
      <button type="button" className="button" onClick={() => {handleClick('9'); }}>9</button>
      <button type="button" className="right-button" onClick={() => {handleClick('x'); }}>&#215;</button>
      <button type="button" className="button" onClick={() => {handleClick('4'); }}>4</button>
      <button type="button" className="button" onClick={() => {handleClick('5'); }}>5</button>
      <button type="button" className="button" onClick={() => {handleClick('6'); }}>6</button>
      <button type="button" className="right-button" onClick={() => {handleClick('-'); }}>&#8722;</button>
      <button type="button" className="button" onClick={() => {handleClick('1'); }}>1</button>
      <button type="button" className="button" onClick={() => {handleClick('2'); }}>2</button>
      <button type="button" className="button" onClick={() => {handleClick('3'); }}>3</button>
      <button type="button" className="right-button" onClick={() => {handleClick('+'); }}>&#43;</button>
      <button type="button" className="button zero" onClick={() => {handleClick('0'); }}>0</button>
      <button type="button" className="button" onClick={() => {handleClick('.'); }}>.</button>
      <button type="button" className="right-button" onClick={() => {handleClick('='); }}>&#61;</button>
    </div>
  );
}

export default Buttons;
