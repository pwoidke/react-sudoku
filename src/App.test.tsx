import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

describe('<App />', () => {
  let container: HTMLElement;
  let label: HTMLElement;

  beforeEach(() => {
    container = render(<App />).container;
    label = screen.getByLabelText(/Toggle Light\/Dark Mode/i);
  });

  describe('when page is initialized', () => {
    it('renders', () => {
      const header = screen.getByText(/Spek-DoKu/);
      const footer = screen.getByText(/🐙/);
      expect(header).toBeInTheDocument();
      expect(footer).toBeInTheDocument();
    });

    it('renders in light mode by default', () => {
      expect(container.firstChild).toHaveClass('light');
    });
  });

  describe('when the toggle theme button is clicked', () => {
    beforeEach(() => {
      jest.spyOn(window.localStorage.__proto__, 'setItem');
      window.localStorage.__proto__.setItem = jest.fn();
      userEvent.click(label);
    });
    it('switches to the dark theme', () => {
      expect(container.firstChild).toHaveClass('dark');
    });
    it('saves the theme selection', () => {
      expect(localStorage.setItem).toHaveBeenCalledWith('theme', '"dark"');
    });
  });

  describe('when the toggle theme button is clicked twice', () => {
    it('switches back to the light theme', () => {
      userEvent.click(label);
      userEvent.click(label);
      expect(container.firstChild).toHaveClass('light');
      expect(localStorage.setItem).toHaveBeenLastCalledWith('theme', '"light"');
    });
  });
});
