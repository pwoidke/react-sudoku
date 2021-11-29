import React from 'react';

import { render } from '@testing-library/react';

import { GameInfo } from './gameInfo';

describe('Game Controls', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GameInfo />);
    expect(baseElement).toBeTruthy();
  });
});
