import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store';

import Appp from './components/Appp';


function App() {

  return (
    <Provider store={store}>
        <Appp/>
    </Provider>
  );
}

export default App;
