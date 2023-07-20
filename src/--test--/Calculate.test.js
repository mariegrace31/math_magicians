import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Buttons from '../components/Button';
import Calculator from '../components/Calculator';
import CalculatorPage from '../components/CalculatorPage';

import textMatcher from '../components/textMatcher';
import '@testing-library/jest-dom/extend-expect';

describe('Buttons component', () => {
 const mockHandleClick = jest.fn();
  it('should matche DOM Snapshot', async () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Buttons handleClick={mockHandleClick}/>
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render buttons correctly', () => {
    const handleClick = jest.fn(); // Mocking the handleClick function
    render(<Buttons handleClick={handleClick} />);

    const buttonsNumber = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
    buttonsNumber.forEach((buttonText) => {
      const button = screen.getByText(new RegExp(`\\b${buttonText}\\b`, 'i'));
      expect(button).toBeInTheDocument();
    });
    const operationButtons = ['\\+', '-', 'x', '÷', '%', '\\+/-', '\\.'];
    operationButtons.forEach(() => {
      const button = screen.getByText(textMatcher, 'i');
      expect(button).toBeInTheDocument();
    });
    const acButton = screen.getByText('AC');
    expect(acButton).toBeInTheDocument();

    const equalButton = screen.getByText('=');
    expect(equalButton).toBeInTheDocument();
  });
  it('should call handleClick function on button click', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Buttons handleClick={handleClick} />);
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(handleClick).toHaveBeenCalledTimes(4);
    expect(handleClick).toHaveBeenCalledWith('1');
    expect(handleClick).toHaveBeenCalledWith('+');
    expect(handleClick).toHaveBeenCalledWith('2');
    expect(handleClick).toHaveBeenCalledWith('=');
  });
});
describe('Buttons component', () => {
  it('should matche DOM Snapshot', async () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Calculator />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render without errors', () => {
    render(<Calculator />);
  });
});
describe('Buttons component', () => {
  it('should matche DOM Snapshot', async () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <CalculatorPage />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render without errors', () => {
    render(
      <MemoryRouter>
        <CalculatorPage />
      </MemoryRouter>,
    );
  });
});
