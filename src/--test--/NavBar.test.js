import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/NavBar';
import '@testing-library/jest-dom/extend-expect';

describe('Navigation menu component', () => {
  it('should match DOM Snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Navigation menu component correctly', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const homeLink = screen.getByText(/Home\b/i);
    const calculatorLink = screen.getByText(/Calculator\b/i);
    const quoteLink = screen.getByText(/Quote\b/i);

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
    expect(calculatorLink).toBeInTheDocument();
    expect(calculatorLink).toHaveAttribute('href', '/calculator');
    expect(quoteLink).toBeInTheDocument();
    expect(quoteLink).toHaveAttribute('href', '/quote');
  });
});
