import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// mock functions for matchMedia (used in `react-media-hook`)
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

test('renders sudoku game', () => {
  render(<App />);
  const linkElement = screen.getByText(/Spek-DoKu/i);
  expect(linkElement).toBeInTheDocument();
});
