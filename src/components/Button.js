import './Buttons.css';

function Buttons() {
  return (
    <div className="buttons">
      <button type="button" className="button">AC</button>
      <button type="button" className="button">+/-</button>
      <button type="button" className="button">%</button>
      <button type="button" className="right-button">&#247;</button>
      <button type="button" className="button">7</button>
      <button type="button" className="button">8</button>
      <button type="button" className="button">9</button>
      <button type="button" className="right-button">&#215;</button>
      <button type="button" className="button">4</button>
      <button type="button" className="button">5</button>
      <button type="button" className="button">6</button>
      <button type="button" className="right-button">&#8722;</button>
      <button type="button" className="button">1</button>
      <button type="button" className="button">2</button>
      <button type="button" className="button">3</button>
      <button type="button" className="right-button">&#43;</button>
      <button type="button" className="button zero">0</button>
      <button type="button" className="button">.</button>
      <button type="button" className="right-button">&#61;</button>
    </div>
  );
}

export default Buttons;