import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/HomePage';
import '@testing-library/jest-dom/extend-expect';


describe('Home page component', () => {
  it('should match DOM Snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Home />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Homepage component correctly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const welcome = screen.queryByText('Welcome to our page!');
    expect(welcome).toBeInTheDocument();
  });
});