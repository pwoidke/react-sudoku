import React from 'react';

import { render } from '@testing-library/react';

import { Controls } from './controls';

describe('Controls', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Controls />);
    expect(baseElement).toBeTruthy();
  });
});
