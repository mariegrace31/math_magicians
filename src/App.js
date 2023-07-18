import { Routes, Route } from 'react-router-dom';
import MyQuote from './components/QuotePage';
import Home from './components/HomePage';
import CalculatorPage from './components/CalculatorPage';
import './App.css';

const App = () => (
    <Routes>
      <Route path = '/' element = {<Home />} />
      <Route path = '/calculator' element = {<CalculatorPage />} />
      <Route path = '/quote' element = {<MyQuote />} />
    </Routes>
);
export default App;
