import { createSelector } from 'reselect';

// Only 2 types of selectors
// 1. input selector
// 2. output selector

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  //  [selectCart, selectUser],
  [selectUser],
  user => user.currentUser
);
