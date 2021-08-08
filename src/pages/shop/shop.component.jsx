import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';

const ShopPage = ({ fetchCollectionsStart, match }) => {
  // class ShopPage extends React.Component {
  // componentDidMount() {
  //   const { fetchCollectionsStart } = this.props;
  //   fetchCollectionsStart();
  // }

  // render() {
  //   const { match } = this.props;

  useEffect(() => {
    // When either this props / the parent of this component's one is changed
    // or the current use is updated, fetchCollectionStart will be called.
    // So that avoiding to call twice (first call, and after checkUserSession is done),
    // we need to add "[fetchCollectionsStart]" in 2nd arg of useEffect.
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
  // }
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

//
// *** Before using Hooks
//

// import React from 'react';
// import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';

// import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
// import CollectionPageContainer from '../../pages/collection/collection.container';

// class ShopPage extends React.Component {
//   componentDidMount() {
//     const { fetchCollectionsStart } = this.props;
//     fetchCollectionsStart();
//   }

//   render() {
//     const { match } = this.props;

//     return (
//       <div className="shop-page">
//         <Route
//           exact
//           path={`${match.path}`}
//           component={CollectionsOverviewContainer}
//           // render={props => (
//           //   <CollectionsOverviewWithSpinner
//           //     isLoading={isCollectionFetching}
//           //     {...props}
//           //   />
//           // )}
//         />
//         <Route
//           path={`${match.path}/:collectionId`}
//           component={CollectionPageContainer}
//           // render={props => (
//           //   <CollectionPageWithSpinner
//           //     isLoading={!isCollectionsLoaded}
//           //     {...props}
//           //   />
//           // )}
//         />
//       </div>
//     );
//   }
// }

// // const mapStateToProps = createStructuredSelector({
// //   //  isCollectionFetching: selectIsCollectionFetching,
// //   //isCollectionsLoaded: selectIsCollectionsLoaded,
// // });

// const mapDispatchToProps = dispatch => ({
//   fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
// });

// export default connect(null, mapDispatchToProps)(ShopPage);

//
// import SHOP_DATA from './shop.data';
// import CollectionPreview from '../../components/collection-preview/collection-preview.component';
// import { createStructuredSelector } from 'reselect';
// import { connect } from 'react-redux';
// import { selectCollections } from '../../redux/shop/shop.selectors';
// import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
// import CollectionPage from '../collection/collection.component';
// import WithSpinner from '../../components/with-spinner/with-spinner.component';
// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from '../../firebase/firebase.utils';
// import { updateCollections } from '../../redux/shop/shop.actions';
// import {
//   //  selectIsCollectionFetching,
//   selectIsCollectionsLoaded,
// } from '../../redux/shop/shop.selectors';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);
//
//
// NOTE: Router will store an actual uri in a variable named categoryId.
//
// class ShopPage extends React.Component {
//   state = {
//     loading: true,
//   };

//   // Subscribe model
//   unsubscribeFromShapshot = null;

//   // Load the SHOP_DATA from firestore when loading App / there are updates in database.
//   componentDidMount() {
//     const { updateCollections } = this.props;
//     const collectionRef = firestore.collection('collections');

//     collectionRef.get().then(snapshot => {
//       // Promise
//       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//       updateCollections(collectionsMap);
//       this.setState({ loading: false });
//     });

//     // Another Way#1
//     //
//     // fetch(
//     //   'https://firestore.googleapis.com/v1/projects/crwn-db-b1375/databases/(default)/documents/collections'
//     // )
//     //   .then(response => response.json())
//     //   .then(collections => console.log(collections));

//     // Another Way#2
//     //
//     // collectionRef.onSnapshot(async snapShot => {
//     //   //console.log(snapShot.data());
//     //   const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
//     //   updateCollections(collectionsMap);
//     //   this.setState({ loading: false });

//     //   //console.log(collectionsMap);
//     //   // hats: {routeName: "hats", id: "TiBBtUxM5u8ZxNM75lqx", title: "Hats", items: Array(9)}
//     //   // jackets: {routeName: "jackets", id: "bCF7CHhJshXg6Jgz6hQ7", title: "Jackets", items: Array(5)}
//     //   // mens: {routeName: "mens", id: "KVKmvqaPYg6nljlPHnbL", title: "Mens", items: Array(6)}
//     //   // sneakers: {routeName: "sneakers", id: "w8nQNZQVz8YezNIwC5Io", title: "Sneakers", items: Array(8)}
//     //   // womens: {routeName: "womens", id: "PVEEVdLFzgw9TKRsDgzJ", title: "Womens", items: Array(7)}
//     // });
//   }

//   render() {
//     const { match } = this.props;
//     const { loading } = this.state; // DO NOT MIX UP state and props

//     //console.log(match);
//     return (
//       <div className="shop-page">
//         <Route
//           exact
//           path={`${match.path}`}
//           render={props => (
//             <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
//           )}
//         />
//         <Route
//           path={`${match.path}/:collectionId`}
//           render={props => (
//             <CollectionPageWithSpinner isLoading={loading} {...props} />
//           )}
//         />
//       </div>
//     );
//   }

//   // render() {
//   //   const { match } = this.props;
//   //   //console.log(match);
//   //   return (
//   //     <div className="shop-page">
//   //       <Route exact path={`${match.path}`} component={CollectionsOverview} />
//   //       <Route
//   //         path={`${match.path}/:collectionId`}
//   //         component={CollectionPage}
//   //       />
//   //     </div>
//   //   );
//   // }
// }

// const mapDispatchToProps = dispatch => ({
//   updateCollections: collectionsMap =>
//     dispatch(updateCollections(collectionsMap)),
// });

// export default connect(null, mapDispatchToProps)(ShopPage);

//
// Before we moved the SHOP_DATA to firestore.

// // Router will store an actual uri in a variable named categoryId.
// const ShopPage = ({ match }) => {
//   //console.log(match);
//   return (
//     <div className="shop-page">
//       <Route exact path={`${match.path}`} component={CollectionsOverview} />
//       <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//     </div>
//   );
// };

// export default ShopPage;

// const ShopPage = ({ collections }) => (
//   <div className="shop-page">
//     {collections.map(({ id, ...otherCollectionProps }) => (
//       <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
//     ))}
//   </div>
// );

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollections,
// });

// export default connect(mapStateToProps)(ShopPage);

// class ShopPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       collections: SHOP_DATA,
//     };
//   }

//   render() {
//     const { collections } = this.state;
//     return (
//       <div className="shop-page">
//         {collections.map(({ id, ...otherCollectionProps }) => (
//           <CollectionPreview
//             key={id}
//             {...otherCollectionProps}
//           ></CollectionPreview>
//         ))}
//       </div>
//     );
//   }
// }

// export default ShopPage;
