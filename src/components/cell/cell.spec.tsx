import React from 'react';

import { render } from '@testing-library/react';

import Cell from './cell';

describe('Cell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Cell
        value={'1'}
        onChangeFunction={(e) => {
          console.log('change event fired');
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
