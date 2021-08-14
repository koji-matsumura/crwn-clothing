import React from 'react';
import { default as CollectionItem } from '../../components/collection-item/collection-item.container';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './collection.styles';

//import CollectionsContext from '../../contexts/collections/collections.context';

const CollectionPage = ({ collection }) => {
  // const collections = useContext(CollectionsContext);
  // const collection = collections[match.params.collectionId];
  const { title, items } = collection;

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

export default CollectionPage;

//
// *** Before using GraphQL
//

// import React, { useContext } from 'react';
// import CollectionItem from '../../components/collection-item/collection-item.component';
// import {
//   CollectionPageContainer,
//   CollectionTitle,
//   CollectionItemsContainer,
// } from './collection.styles';

// import CollectionsContext from '../../contexts/collections/collections.context';

// const CollectionPage = ({ match }) => {
//   const collections = useContext(CollectionsContext);
//   const collection = collections[match.params.collectionId];
//   const { title, items } = collection;

//   return (
//     // <CollectionsContext.Consumer>
//     // {collections => {
//     // const collection = collections[match.params.collectionId];
//     // const { title, items } = collection;
//     // return (
//     <CollectionPageContainer>
//       <CollectionTitle>{title}</CollectionTitle>
//       <CollectionItemsContainer>
//         {items.map(item => (
//           <CollectionItem key={item.id} item={item} />
//         ))}
//       </CollectionItemsContainer>
//     </CollectionPageContainer>
//     // );
//     // }}
//     // </CollectionsContext.Consumer>
//   );
// };

// export default CollectionPage;

//
// *** In case of context API
//

// //import React, { useEffect } from 'react';
// import React from 'react';
// //import { connect } from 'react-redux';

// import CollectionItem from '../../components/collection-item/collection-item.component';
// //import { selectCollection } from '../../redux/shop/shop.selectors';

// //import './collection.styles.scss';
// import {
//   CollectionPageContainer,
//   CollectionTitle,
//   CollectionItemsContainer,
// } from './collection.styles';

// import CollectionsContext from '../../contexts/collections/collections.context';

// // const CollectionPage = ({ collection }) => {
// const CollectionPage = ({ match }) => {
//   //
//   // NOTE: if you want to update your collection dynamically.
//   //
//   // useEffect(() => {
//   //   // like ComponentDidMount()
//   //   console.log('I am subscribing');
//   //   const unsubscribeFromCollections = () => {
//   //     //console.log('some process');
//   //   };

//   //   // Clean up function like ComponentWillUnmount()
//   //   return () => {
//   //     console.log('I am unsubscribing');
//   //     unsubscribeFromCollections();
//   //   };
//   // }, []);

//   // const { title, items } = collection;
//   //console.log(collection);
//   // return (
//   //   <CollectionPageContainer>
//   //     <CollectionTitle>{title}</CollectionTitle>
//   //     <CollectionItemsContainer>
//   //       {items.map(item => (
//   //         <CollectionItem key={item.id} item={item} />
//   //       ))}
//   //     </CollectionItemsContainer>
//   //   </CollectionPageContainer>
//   // );

//   // In case of context API
//   return (
//     <CollectionsContext.Consumer>
//       {collections => {
//         const collection = collections[match.params.collectionId];
//         const { title, items } = collection;
//         return (
//           <CollectionPageContainer>
//             <CollectionTitle>{title}</CollectionTitle>
//             <CollectionItemsContainer>
//               {items.map(item => (
//                 <CollectionItem key={item.id} item={item} />
//               ))}
//             </CollectionItemsContainer>
//           </CollectionPageContainer>
//         );
//       }}
//     </CollectionsContext.Consumer>
//   );
// };

// // const mapStateToProps = (state, ownProps) => ({
// //   collection: selectCollection(ownProps.match.params.collectionId)(state),
// // });

// //export default connect(mapStateToProps)(CollectionPage);
// export default CollectionPage;

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
