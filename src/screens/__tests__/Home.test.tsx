// Home.test.tsx
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Home from '../Home';
import { useDispatch, useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Home Screen', () => {
  const dispatch = jest.fn(); // Mock dispatch
  const navigation = {
    navigate: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it('should render loading state', () => {
    // Mock useDispatch and useSelector
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockReturnValue({ data: [], loading: true });

    const { getByText } = render(<Home navigation={navigation} />);

    expect(getByText('Loading...')).toBeTruthy();
  });

  it.skip('should fetch data on mount', async () => {
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockReturnValue({ data: [], loading: false });

    render(<Home navigation={navigation} />);

    // Ensure that the API call action was dispatched
    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
    });
  });

  it('should navigate on item press', async () => {
    const mockData = [{ id: 1, name: 'Item 1' }];

    // Mock useDispatch and useSelector
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockReturnValue({ data: mockData, loading: false });

    const { getByText } = render(<Home navigation={navigation} />);

    // Wait for the data to be rendered
    await waitFor(() => expect(getByText('name : Item 1')).toBeTruthy());

    // Simulate press on the first item
    fireEvent.press(getByText('name : Item 1'));

    // Check if navigate is called with the correct parameters
    expect(navigation.navigate).toHaveBeenCalledWith('Detial', {
      id: 1,
      name: 'Item 1',
    });
  });
});
