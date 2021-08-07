import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components//with-spinner/with-spinner.component';
import CollectionPage from '../collection/collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state),
});

// NOTE: this syntax is not easy to read, especially using HOC/ neseted.
//       So that "compose" is often used to make it clear.
//
// const CollectionsOverviewContainer = connect(mapStateToProps)(
//   WithSpinner(collectionsOverview)
// );

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
