import React from 'react';
import { render } from '@testing-library/react-native';
import Detial from '../Detial';

describe('Detial Screen', () => {
  const mockRoute = {
    params: {
      id: 1,
      name: 'Test Item',
      data: {
        id: 'Red',
        name: '64GB',
      },
    },
  };

  it('should render details correctly', () => {
    const { getByText } = render(<Detial route={mockRoute} />);

    expect(getByText('ID : 1')).toBeTruthy();
    expect(getByText('name : Test Item')).toBeTruthy();
  });
});
