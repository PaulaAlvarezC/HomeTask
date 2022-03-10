import AppNavigation from './src/navigation';
import { Provider } from 'react-redux';
import React from 'react';
import { init } from './src/db';
import store from './src/store';

const App = () => {

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
 