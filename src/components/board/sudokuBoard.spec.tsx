import React from 'react';

import { render } from '@testing-library/react';

import { SudokuBoard } from './sudokuBoard';
import { emptyBoard } from '../../utils';

describe('Board', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SudokuBoard boardValues={emptyBoard} onUpdateBoard={() => {}} />
    );
    expect(baseElement).toBeTruthy();
  });
});
