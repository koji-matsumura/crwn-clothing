import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import collectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

// NOTE: this syntax is not easy to read, especially using HOC/ neseted.
//       So that "compose" is often used to make it clear.
//
// const CollectionsOverviewContainer = connect(mapStateToProps)(
//   WithSpinner(collectionsOverview)
// );

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(collectionsOverview);

export default CollectionsOverviewContainer;
