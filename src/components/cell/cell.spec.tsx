import React from 'react';

import { render } from '@testing-library/react';

import { Cell } from './cell';

describe('Cell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Cell
        index={1}
        square='XX'
        value='1'
        updateBoardValues={() => {
          console.log('change event fired');
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
