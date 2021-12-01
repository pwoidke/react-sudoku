import React from 'react';

import { render } from '@testing-library/react';

import { NewGameButtons } from './newGameButtons';

describe('New Game Buttons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewGameButtons />);
    expect(baseElement).toBeTruthy();
  });
});
