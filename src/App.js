import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import CurrentUserContext from './contexts/current-user/current-user.context';

// NOTE: need to destruct all props here.
//class App extends React.Component {
const App = ({ checkUserSession, currentUser }) => {
  // componentDidMount() {
  //   const { checkUserSession } = this.props;
  //   checkUserSession();
  // }
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]); // re-render when checkUserSession is updated

  // unsubscribeFromAuth = null;

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  // In case of "<Route exact...",
  // a page will be shown if a URI user specified matches a path.
  // If no exact, multiple renders will be conducted matching all patterns.
  //   e.g. "/"" and "/hats" if a URI is /hats.
  // If you want to use a variable, specify :variable in a path. e.g. /hats/:id

  // render() {
  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
      </CurrentUserContext.Provider>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            // this.props.currentUser ? (
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
  // }
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

//
// *** Before using Hooks
//

// import React from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import './App.css';

// import HomePage from './pages/homepage/homepage.component';
// import ShopPage from './pages/shop/shop.component';
// import Header from './components/header/header.component';
// import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import CheckoutPage from './pages/checkout/checkout.component';

// //import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// //import { setCurrectUser } from './redux/user/user.actions';
// import { selectCurrentUser } from './redux/user/user.selectors';
// import { checkUserSession } from './redux/user/user.actions';

// class App extends React.Component {
//   componentDidMount() {
//     const { checkUserSession } = this.props;
//     checkUserSession();
//   }

//   unsubscribeFromAuth = null;

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

//   // In case of "<Route exact...",
//   // a page will be shown if a URI user specified matches a path.
//   // If no exact, multiple renders will be conducted matching all patterns.
//   //   e.g. "/"" and "/hats" if a URI is /hats.
//   // If you want to use a variable, specify :variable in a path. e.g. /hats/:id
//   render() {
//     return (
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/shop" component={ShopPage} />
//           <Route exact path="/checkout" component={CheckoutPage} />
//           <Route
//             exact
//             path="/signin"
//             render={() =>
//               this.props.currentUser ? (
//                 <Redirect to="/" />
//               ) : (
//                 <SignInAndSignUpPage />
//               )
//             }
//           />
//         </Switch>
//       </div>
//     );
//   }
// }

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
// });

// const mapDispatchToProps = dispatch => ({
//   checkUserSession: () => dispatch(checkUserSession()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);

//
// *** Before using Saga ***
//

// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);

//   //   this.state = {
//   //     currentUser: null,
//   //   };
//   // }

//   componentDidMount() {
//     //const { setCurrectUser, collectionsArray } = this.props;
//     const { setCurrectUser } = this.props;

//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//       if (userAuth) {
//         const userRef = await createUserProfileDocument(userAuth);

//         // When shapshot is changed by deleteing, updating, inserting,...
//         userRef.onSnapshot(snapShot => {
//           //console.log(snapShot.data());
//           this.props.setCurrectUser({
//             id: snapShot.id,
//             ...snapShot.data(),
//           });
//         });
//       } else {
//         // set a null in case of no user logged in.
//         setCurrectUser(userAuth);
//         // addCollectionAnDocuments(
//         //   'collections',
//         //   collectionsArray.map(({ title, items }) => ({ title, items }))
//         // );
//       }
//     });

//     // Firebase keeps track of the current user logged in.
//     // When a state is changed such as logging in a new user/logging out,
//     // this method is called and our State will be updated.
//     // auth.onAuthStateChanged(user => {
//     //   this.setState({ currentUser: user });
//     //   //console.log(user);
//     // });
//   }

//   unsubscribeFromAuth = null;

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

//   // In case of "<Route exact...",
//   // a page will be shown if a URI user specified matches a path.
//   // If no exact, multiple renders will be conducted matching all patterns.
//   //   e.g. "/"" and "/hats" if a URI is /hats.
//   // If you want to use a variable, specify :variable in a path. e.g. /hats/:id
//   render() {
//     return (
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/shop" component={ShopPage} />
//           <Route exact path="/checkout" component={CheckoutPage} />
//           <Route
//             exact
//             path="/signin"
//             render={() =>
//               this.props.currentUser ? (
//                 <Redirect to="/" />
//               ) : (
//                 <SignInAndSignUpPage />
//               )
//             }
//           />
//         </Switch>
//       </div>
//     );
//   }
// }

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   //collectionsArray: selectCollectionsForPreview,
// });

// const mapDispatchToProps = dispatch => ({
//   //
//   setCurrectUser: user => dispatch(setCurrectUser(user)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
