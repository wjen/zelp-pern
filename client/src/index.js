import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RestaurantsContextProvider } from './context/context';
ReactDOM.render(
  <React.StrictMode>
    <RestaurantsContextProvider>
      <App />
    </RestaurantsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
