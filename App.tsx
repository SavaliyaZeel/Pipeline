import { View } from 'react-native';
import MainNavigator from './src/navigator/MainNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

const App = () => {
  return (
    <View style={{ flex: 1 }} testID="provider-wrapper">
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </View>
  );
};

export default App;
