import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';

// In case of "<Route exact...",
// a page will be shown if a URI user specified matches a path.
// If no exact, multiple renders will be conducted matching all patterns.
//   e.g. "/"" and "/hats" if a URI is /hats.
// If you want to use a variable, specify :variable in a path. e.g. /hats/:id
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
