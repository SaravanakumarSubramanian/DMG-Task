/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {store,persistor} from 'src/redux/store';
import {Provider} from 'react-redux';
import { Dashboard } from 'src/screens/dashboard/Dashboard';
import { Colors } from './shared/Colors';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = AppStyles(isDarkMode);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView >
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={styles.statusBar.backgroundColor}
          />
          <Dashboard/>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const AppStyles =(darkSheme:boolean)=> StyleSheet.create({
  statusBar:{
    backgroundColor:darkSheme?Colors.bgDarkColor:Colors.bgColor
  }
})



export default App;
