import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Spinner from '../../components/spinner/spinner.component';
import CollectionPage from '../collection/collection.component';

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionPageContainer = ({ match }) => (
  <Query
    query={GET_COLLECTION_BY_TITLE}
    variables={{ title: match.params.collectionId }}
  >
    {({ loading, data }) => {
      if (loading) return <Spinner />;
      const { getCollectionsByTitle } = data;
      return <CollectionPage collection={getCollectionsByTitle} />;
    }}
  </Query>
);

export default CollectionPageContainer;

//
// *** Before using GraphQL
//

// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { compose } from 'redux';
// import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
// import WithSpinner from '../../components//with-spinner/with-spinner.component';
// import CollectionPage from '../collection/collection.component';

// const mapStateToProps = createStructuredSelector({
//   isLoading: state => !selectIsCollectionsLoaded(state),
// });

// // NOTE: this syntax is not easy to read, especially using HOC/ neseted.
// //       So that "compose" is often used to make it clear.
// //
// // const CollectionsOverviewContainer = connect(mapStateToProps)(
// //   WithSpinner(collectionsOverview)
// // );

// const CollectionPageContainer = compose(
//   connect(mapStateToProps),
//   WithSpinner
// )(CollectionPage);

// export default CollectionPageContainer;
