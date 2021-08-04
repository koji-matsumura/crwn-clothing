import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrectUser } from './redux/user/user.actions';

// In case of "<Route exact...",
// a page will be shown if a URI user specified matches a path.
// If no exact, multiple renders will be conducted matching all patterns.
//   e.g. "/"" and "/hats" if a URI is /hats.
// If you want to use a variable, specify :variable in a path. e.g. /hats/:id
class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  componentDidMount() {
    const { setCurrectUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          //console.log(snapShot.data());
          this.props.setCurrectUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        // set a null in case of no user logged in.
        setCurrectUser(userAuth);
      }
    });

    // Firebase keeps track of the current user logged in.
    // When a state is changed such as logging in a new user/logging out,
    // this method is called and our State will be updated.
    // auth.onAuthStateChanged(user => {
    //   this.setState({ currentUser: user });
    //   //console.log(user);
    // });
  }

  unsubscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  //
  setCurrectUser: user => dispatch(setCurrectUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
