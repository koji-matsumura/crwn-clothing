import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';

export default function* rootSaga() {
  // middleware to run multiple Effects in parallel
  // and wait for all of them to complete.
  // It's quite the corresponding API to standard Promise#all.
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
