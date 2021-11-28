import React from 'react';

import { render } from '@testing-library/react';

import { Button } from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Button
        text='this is a button'
        onClickEvent={(e) => {
          console.log('click event fired');
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
