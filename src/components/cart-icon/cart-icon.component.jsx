import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
//import { CartContext } from '../../providers/cart/cart.provider';

const CartIcon = ({ cartItemsCount, toggleCartHidden }) => {
  //const { toggleHidden, cartItemsCount } = useContext(CartContext);
  //const { cartItemsCount } = useContext(CartContext);

  //console.log(toggleCartHidden);

  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;

//
// *** Before using GraphQL
//

// import React, { useContext } from 'react';
// //import { connect } from 'react-redux';
// //import { toggleCartHidden } from '../../redux/cart/cart.actions';
// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
// import './cart-icon.styles.scss';
// // import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
// // import { createStructuredSelector } from 'reselect';
// // import CartContext from '../../contexts/cart/cart.context';
// import { CartContext } from '../../providers/cart/cart.provider';

// // const CartIcon = ({ toggleCartHidden, itemCount }) => {
// const CartIcon = () => {
//   const { toggleHidden, cartItemsCount } = useContext(CartContext);

//   return (
//     // <div className="cart-icon" onClick={toggleCartHidden}>
//     <div className="cart-icon" onClick={toggleHidden}>
//       <ShoppingIcon className="shopping-icon" />
//       {/* <span className="item-count">{itemCount}</span> */}
//       <span className="item-count">{cartItemsCount}</span>
//     </div>
//   );
// };

// // const mapStateToProps = createStructuredSelector({
// //   itemCount: selectCartItemsCount,
// // });

// // const mapDispatchToProps = dispatch => ({
// //   toggleCartHidden: () => dispatch(toggleCartHidden()),
// // });

// // export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
// export default CartIcon;
