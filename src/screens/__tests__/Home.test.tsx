import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Home from '../Home';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../store/slices/listSlice';

// Mock Redux hooks
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../../store/slices/listSlice', () => ({
  setData: jest.fn(),
  setError: jest.fn(),
  startLoading: jest.fn(),
}));

// Mock fetch API globally
global.fetch = jest.fn();

describe('Home Screen', () => {
  const dispatch = jest.fn(); // Mock dispatch
  const navigation = {
    navigate: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
    useDispatch.mockReturnValue(dispatch);
  });

  it('should render loading state', () => {
    useSelector.mockReturnValue({ data: [], loading: true });

    const { getByText } = render(<Home navigation={navigation} />);

    expect(getByText('Loading...')).toBeTruthy();
  });

  it('should fetch data and update the store', async () => {
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockReturnValue({ data: [], loading: false });

    render(<Home navigation={navigation} />);

    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledWith(setData(expect.any(Array)));
    });
  });

  test('should handle API error and dispatch setError', async () => {
    // Mock fetch to simulate an error
    global.fetch = jest.fn(() => Promise.reject(new Error('API Error')));

    // Set the initial state for useSelector mock
    useSelector.mockReturnValue({ data: [], loading: false, error: null });

    // Render the Home component
    render(<Home navigation={navigation} />);
  });

  it('should navigate on item press', async () => {
    const mockData = [{ id: 1, name: 'Item 1' }];

    useSelector.mockReturnValue({ data: mockData, loading: false });

    const { getByText } = render(<Home navigation={navigation} />);

    await waitFor(() => expect(getByText('name : Item 1')).toBeTruthy());

    fireEvent.press(getByText('name : Item 1'));

    expect(navigation.navigate).toHaveBeenCalledWith('Detial', {
      id: 1,
      name: 'Item 1',
    });
  });
});
