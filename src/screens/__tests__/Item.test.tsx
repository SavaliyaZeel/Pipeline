import React from 'react';
import { render } from '@testing-library/react-native';
import Item from '../Item';

describe('Item Screen', () => {
  const mockRoute = {
    params: {
      id: 1,
      name: 'Test Item',
      data: {
        color: 'Red',
        capacity: '64GB',
      },
    },
  };

  it('should render details correctly', () => {
    const { getByText } = render(<Item route={mockRoute} />);

    expect(getByText('ID : 1')).toBeTruthy();
    expect(getByText('name : Test Item')).toBeTruthy();
  });
});
