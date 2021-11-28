import React from 'react';

import { render } from '@testing-library/react';

import { GameInfo } from './gameInfo';
import { Difficulties, emptyBoard } from '../../utils/index';

describe('Game Controls', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <GameInfo
        gameBoard={emptyBoard}
        selectedDifficulty={Difficulties.EASY}
        boardIsValid={true}
        onCheckValid={() => {}}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
