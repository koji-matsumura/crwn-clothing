import React from 'react';
//import SHOP_DATA from './shop.data';
// import CollectionPreview from '../../components/collection-preview/collection-preview.component';
// import { createStructuredSelector } from 'reselect';
// import { connect } from 'react-redux';
// import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

// Router will store an actual uri in a variable named categoryId.
const ShopPage = ({ match }) => {
  //console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;

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
