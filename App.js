import React, { useEffect } from 'react';

import AppNavigation from './src/navigation';
import { Provider } from 'react-redux';
import RNBootSplash from "react-native-bootsplash";
import { init } from './src/db';
import store from './src/store';

const App = () => {
  useEffect(() => {
    setTimeout( () => {
      RNBootSplash.hide();
    }, 1000);
  },[]);

  init().then(() => {
    console.log('DB initialized');
  }).catch(err => {
    console.log('DB initialization failed', err);
  });
   return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
   )
 }
 
 export default App;
 