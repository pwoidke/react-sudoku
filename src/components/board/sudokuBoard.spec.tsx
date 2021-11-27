import React from 'react';

import { render } from '@testing-library/react';

import SudokuBoard from './sudokuBoard';

describe('Board', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SudokuBoard />);
    expect(baseElement).toBeTruthy();
  });
});
