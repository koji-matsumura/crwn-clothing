import React from 'react';
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
    ))}
  </div>
);

export default CollectionsOverview;

//
// Before using GraphQL
//
// import React, { useContext } from 'react';

// import CollectionPreview from '../collection-preview/collection-preview.component';
// import CollectionsContext from '../../contexts/collections/collections.context';

// import './collections-overview.styles.scss';

// const CollectionsOverview = () => {
//   const collectionsMap = useContext(CollectionsContext);
//   const collections = Object.keys(collectionsMap).map(
//     key => collectionsMap[key]
//   );

//   return (
//     <div className="collections-overview">
//       {collections.map(({ id, ...otherCollectionProps }) => (
//         <CollectionPreview key={id} {...otherCollectionProps} />
//       ))}
//     </div>
//   );
// };

// export default CollectionsOverview;

//
// *** Before using GraphQL
//

// import React, { useContext } from 'react';

// import CollectionPreview from '../collection-preview/collection-preview.component';
// import CollectionsContext from '../../contexts/collections/collections.context';

// import './collections-overview.styles.scss';

// const CollectionsOverview = () => {
//   const collectionsMap = useContext(CollectionsContext);
//   const collections = Object.keys(collectionsMap).map(
//     key => collectionsMap[key]
//   );

//   return (
//     <div className="collections-overview">
//       {collections.map(({ id, ...otherCollectionProps }) => (
//         <CollectionPreview key={id} {...otherCollectionProps} />
//       ))}
//     </div>
//   );
// };

// export default CollectionsOverview;

//
// *** Before using Hooks
//

// import React from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import './collections-overview.styles.scss';
// import CollectionPreview from '../collection-preview/collection-preview.component';
// import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

// const CollectionsOverview = ({ collections }) => (
//   <div className="collections-overview">
//     {collections.map(({ id, ...otherCollectionProps }) => (
//       <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
//     ))}
//   </div>
// );

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollectionsForPreview,
// });

// export default connect(mapStateToProps)(CollectionsOverview);
