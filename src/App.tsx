/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store,persistor} from 'src/redux/store';
import {Provider} from 'react-redux';
import { Dashboard } from 'src/screens/dashboard/Dashboard';
import { Colors } from './shared/Colors';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}>
        <SafeAreaView >
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={Colors.bgColor}
          />
          <Dashboard/>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};



export default App;
