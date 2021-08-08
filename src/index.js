import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/integration/react'; //for redux, but not hooks

//import { store, persistor } from './redux/store';
import { store } from './redux/store';
import CartProvider from './providers/cart/cart.provider';

import './index.css';
import App from './App';

// new provider "CartProvider" is added
// NOTE: if we could completely convert this app to hooks from redux,
//       Provider would be removed from the following tree.
ReactDOM.render(
  <CartProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </CartProvider>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <PersistGate persistor={persistor}>
//         <App />
//       </PersistGate>
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// );
