import React from 'react';
// import { Mutation, Query, graphql } from 'react-apollo';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartIcon from './cart-icon.component';
import { flowRight } from 'lodash';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const CartIconContainer = props => {
  const {
    data: { itemCount },
    toggleCartHidden,
  } = props;
  // console.log(props);
  return (
    <CartIcon toggleCartHidden={toggleCartHidden} cartItemsCount={itemCount} />
  );
};

export default flowRight(
  graphql(GET_ITEM_COUNT),
  graphql(TOGGLE_CART_HIDDEN, { name: 'toggleCartHidden' })
)(CartIconContainer);

//
// *** Before using flowRight (instead of compose)
//

// const CartIconContainer = () => (
//   <Query query={GET_ITEM_COUNT}>
//     {({ data: { itemCount } }) => (
//       <Mutation mutation={TOGGLE_CART_HIDDEN}>
//         {toggleCartHidden => (
//           <CartIcon
//             toggleCartHidden={toggleCartHidden}
//             cartItemsCount={itemCount}
//           />
//         )}
//       </Mutation>
//     )}
//   </Query>
// );

// export default CartIconContainer;
