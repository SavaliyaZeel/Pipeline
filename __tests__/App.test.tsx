import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App'; // Adjust the path based on your project structure
import { Provider } from 'react-redux';
import { store } from '../src/store/store'; // Adjust the path based on your project structure

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('App Component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // // Check if MainNavigator is rendered
    // const mainNavigator = getByTestId('main-navigator'); // You may want to add a testID to MainNavigator for easy identification
    // expect(mainNavigator).toBeTruthy();

    // Check if the Provider is wrapped around the component and store is passed
    const provider = getByTestId('provider-wrapper');
    expect(provider).toBeTruthy();
  });
});
