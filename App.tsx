import * as React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import MainNavigator from './src/navigator/MainNavigator';
import { store } from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }} testID="provider-wrapper">
        <MainNavigator />
      </View>
    </Provider>
  );
};

export default App;
