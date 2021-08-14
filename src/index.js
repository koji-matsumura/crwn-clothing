import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/integration/react'; //for redux, but not hooks
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http'; // library of GraphQL
import { InMemoryCache } from 'apollo-cache-inmemory'; // library of GraphQL
import { ApolloClient } from 'apollo-boost';

//import { store, persistor } from './redux/store';
import { store } from './redux/store';
//import CartProvider from './providers/cart/cart.provider';

import './index.css';
import App from './App';
import { resolvers, typeDefs } from './graphql/resolvers';

const httpLink = createHttpLink({
  uri: 'https://crwn-clothing.com',
});
const cache = new InMemoryCache(); // similar to top level reducer
const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers,
});

// Initial data
client.writeData({
  data: {
    cartHidden: true,
    cartItems: [],
    itemCount: 0,
  },
});

// Added Apollo client to use GraphQL and removed CartProvider due to a conflict
//
ReactDOM.render(
  //  <CartProvider>
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  //  </CartProvider>,
  document.getElementById('root')
);

// new provider "CartProvider" is added
// NOTE: if we could completely convert this app to hooks from redux,
//       Provider would be removed from the following tree.
// ReactDOM.render(
//   <CartProvider>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </CartProvider>,
//   document.getElementById('root')
// );

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
