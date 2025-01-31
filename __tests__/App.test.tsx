import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App'; // Correct the import path if necessary
import { Provider } from 'react-redux';
import { store } from '../src/store/store'; // Adjust the path based on your project structure

describe('App Component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Check if the Provider is wrapped around the component and store is passed
    const provider = getByTestId('provider-wrapper');
    expect(provider).toBeTruthy();
  });
});
