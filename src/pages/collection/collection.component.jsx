//import React, { useEffect } from 'react';
import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

//import './collection.styles.scss';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './collection.styles';

const CollectionPage = ({ collection }) => {
  //
  // NOTE: if you want to update your collection dynamically.
  //
  // useEffect(() => {
  //   // like ComponentDidMount()
  //   console.log('I am subscribing');
  //   const unsubscribeFromCollections = () => {
  //     //console.log('some process');
  //   };

  //   // Clean up function like ComponentWillUnmount()
  //   return () => {
  //     console.log('I am unsubscribing');
  //     unsubscribeFromCollections();
  //   };
  // }, []);

  const { title, items } = collection;
  //console.log(collection);
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

//
// *** Before using Hooks
//

// import React from 'react';
// import { connect } from 'react-redux';

// import CollectionItem from '../../components/collection-item/collection-item.component';

// import { selectCollection } from '../../redux/shop/shop.selectors';

// //import './collection.styles.scss';
// import {
//   CollectionPageContainer,
//   CollectionTitle,
//   CollectionItemsContainer,
// } from './collection.styles';

// const CollectionPage = ({ collection }) => {
//   const { title, items } = collection;
//   //console.log(collection);
//   return (
//     <CollectionPageContainer>
//       <CollectionTitle>{title}</CollectionTitle>
//       <CollectionItemsContainer>
//         {items.map(item => (
//           <CollectionItem key={item.id} item={item} />
//         ))}
//       </CollectionItemsContainer>
//     </CollectionPageContainer>
//   );
// };

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state),
// });

// export default connect(mapStateToProps)(CollectionPage);
