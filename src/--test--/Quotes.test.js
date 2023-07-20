import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Quotes from '../components/someQuotes';

describe('Quote component', () => {
  it('should matche DOM Snapshot', async () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Quotes />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders a list of quotes', async () => {
    const data = [
      {
        quote:
          'I&apos;m ultimately a widow and a single mother, who &apos; not even getting to be a mother right now. I am so alone, it&apos;s freaky..',
        author: 'Courtney Love',
        category: 'happiness',
      },
      {
        quote: 'I was never less alone than when by myself.',
        author: 'Edward Gibbon',
        category: 'selfhelp',
      },
      {
        quote: 'Nothing makes us so lonely as our secrets.',
        author: 'Paul Tournier',
        category: 'fitness',
      },
    ];
    render(
      <div className="my-quotes">
        {data.map((item) => (
          <h3 title="quotes" key={item.author}>
            -
            {' '}
            {item.quote}
          </h3>
        ))}
      </div>,
    );
    await screen.debug();
    const quotes = await screen.findAllByTitle('quotes');

    expect(quotes).toHaveLength(3);
  });
});
