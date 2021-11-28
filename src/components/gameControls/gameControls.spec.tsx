import React from 'react';

import { render } from '@testing-library/react';

import { GameControls } from './gameControls';

describe('Game Controls', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <GameControls timeTravel={() => {}} resetBoard={() => {}} clearBoard={() => {}} />
    );
    expect(baseElement).toBeTruthy();
  });
});
