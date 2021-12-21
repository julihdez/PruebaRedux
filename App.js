// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
//import logInReducer from './store/reducer';
import { store } from './store/store';
import ScreenNavigator from './navigator/ScreenNavigator';





function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ScreenNavigator/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;