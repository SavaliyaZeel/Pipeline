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

  //   it('should render data when fetching is complete', async () => {
  //     const mockData = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];

  //     // Mock useDispatch and useSelector
  //     require('react-redux').useDispatch.mockReturnValue(dispatch);
  //     require('react-redux').useSelector.mockReturnValue({ data: mockData, loading: false });

  //     const { getByText, findByText } = render(<Home navigation={navigation} />);

  //     // Wait for loading to disappear
  //     await waitFor(() => expect(getByText('Loading...')).not.toBeTruthy());

  //     // Check if the data is rendered
  //     expect(await findByText('name : Item 1')).toBeTruthy();
  //     expect(await findByText('name : Item 2')).toBeTruthy();
  //   });

  //   it('should handle fetch error', async () => {
  //     // Mock fetch to simulate error
  //     fetch.mockRejectedValueOnce(new Error('Network error'));

  //     // Mock useDispatch and useSelector
  //     require('react-redux').useDispatch.mockReturnValue(dispatch);
  //     require('react-redux').useSelector.mockReturnValue({ data: [], loading: false });

  //     const { getByText, findByText } = render(<Home navigation={navigation} />);

  //     // Wait for loading to disappear
  //     await waitFor(() => expect(getByText('Loading...')).not.toBeTruthy());

  //     // Optionally, you can check if error state is handled and displayed
  //     // Assuming you would display an error message like this:
  //     // expect(findByText('Something went wrong')).toBeTruthy();
  //   });

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
