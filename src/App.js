import Calculator from './components/Calculator';
import './App.css';
import Quotes from './components/someQuotes';

function App() {
  return (
    <div>
      <Calculator />
      <div className="myQuote">
        <Quotes />
      </div>
    </div>
  );
}
export default App;
