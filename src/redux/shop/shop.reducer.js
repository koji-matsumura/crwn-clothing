//import SHOP_DATA from './shop.data';
import ShopActionTypes from './shop.types';

// const INITIAL_STATE = {
//   collections: SHOP_DATA,
// };
const INITIAL_STATE = {
  collections: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...StaticRange,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;

//
// Before we moved the SHOP_DATA to firestore.
//

// import SHOP_DATA from './shop.data';

// const INITIAL_STATE = {
//   collections: SHOP_DATA,
// };

// const shopReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// export default shopReducer;
