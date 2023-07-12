import Buttons from './Button';
import OtherButtons from './OtherButton';
import Result from './Result';

function Calculator() {
  return (
    <div>
      <Result />
      <div>
        <div><Buttons /></div>
        <OtherButtons />
      </div>
    </div>
  );
}

export default Calculator;
