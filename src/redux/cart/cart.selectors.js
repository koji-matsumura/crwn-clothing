import { createSelector } from 'reselect';

// Only 2 types of selectors
// 1. input selector
// 2. output selector

const selectCart = state => state.cart;
//const selectUser = sate => state.user;

export const selectCartItems = createSelector(
  //  [selectCart, selectUser],
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
