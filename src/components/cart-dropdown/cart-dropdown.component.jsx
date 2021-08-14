import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router';
//import { CartContext } from '../../providers/cart/cart.provider';

const CartDropDown = ({ cartItems, history, toggleCartHidden }) => {
  //const { cartItems, toggleHidden } = useContext(CartContext);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          toggleCartHidden();
        }}
      >
        Go To Checkout
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropDown);

//
// *** Before using GraphSQL
//

// import React, { useContext } from 'react';
// //import { connect } from 'react-redux';
// import CustomButton from '../custom-button/custom-button.component';
// import './cart-dropdown.styles.scss';
// import CartItem from '../cart-item/cart-item.component';
// //import { selectCartItems } from '../../redux/cart/cart.selectors';
// //import { createStructuredSelector } from 'reselect';
// import { withRouter } from 'react-router';
// //import { toggleCartHidden } from '../../redux/cart/cart.actions';
// import { CartContext } from '../../providers/cart/cart.provider';

// // NOTE: 0 is falsy value.
// //const CartDropDown = ({ cartItems, history, dispatch }) => {
// const CartDropDown = ({ history }) => {
//   const { cartItems, toggleHidden } = useContext(CartContext);

//   return (
//     <div className="cart-dropdown">
//       <div className="cart-items">
//         {cartItems.length ? (
//           cartItems.map(cartItem => (
//             <CartItem key={cartItem.id} item={cartItem} />
//           ))
//         ) : (
//           <span className="empty-message">Your cart is empty</span>
//         )}
//       </div>
//       <CustomButton
//         onClick={() => {
//           // Hide a cart-dropdown page before moving a checkout page.
//           history.push('/checkout');
//           // dispatch(toggleCartHidden());
//           toggleHidden();
//         }}
//       >
//         Go To Checkout
//       </CustomButton>
//     </div>
//   );
// };

// // const mapStateToProps = createStructuredSelector({
// //   cartItems: selectCartItems,
// // });

// //export default withRouter(connect(mapStateToProps)(CartDropDown));
// export default withRouter(CartDropDown);
