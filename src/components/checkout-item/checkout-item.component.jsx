import React, { useContext } from 'react';
import './checkout-item.styles.scss';
//import { connect } from 'react-redux';
//import {
//clearItemFromCart,
// addItem,
// removeItem,
//} from '../../redux/cart/cart.actions';
import { CartContext } from '../../providers/cart/cart.provider';

// const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <div className="arrow"> </div>
      <span className="price">{price}</span>
      {/* <div className="remove-button" onClick={() => clearItem(cartItem)}> */}
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

//const mapDispatchToProps = dispatch => ({
//clearItem: item => dispatch(clearItemFromCart(item)),
// addItem: item => dispatch(addItem(item)),
// removeItem: item => dispatch(removeItem(item)),
//});

// export default connect(null, mapDispatchToProps)(CheckoutItem);
export default CheckoutItem;

//
// *** Before using Cart Provider
//

// import React from 'react';
// import './checkout-item.styles.scss';
// import { connect } from 'react-redux';
// import {
//   clearItemFromCart,
//   addItem,
//   removeItem,
// } from '../../redux/cart/cart.actions';

// const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
//   const { name, imageUrl, price, quantity } = cartItem;
//   return (
//     <div className="checkout-item">
//       <div className="image-container">
//         <img src={imageUrl} alt="item" />
//       </div>
//       <span className="name">{name}</span>
//       <span className="quantity">
//         <div className="arrow" onClick={() => removeItem(cartItem)}>
//           &#10094;
//         </div>
//         <span className="value">{quantity}</span>
//         <div className="arrow" onClick={() => addItem(cartItem)}>
//           &#10095;
//         </div>
//       </span>
//       <div className="arrow"> </div>
//       <span className="price">{price}</span>
//       <div className="remove-button" onClick={() => clearItem(cartItem)}>
//         &#10005;
//       </div>
//     </div>
//   );
// };

// const mapDispatchToProps = dispatch => ({
//   clearItem: item => dispatch(clearItemFromCart(item)),
//   addItem: item => dispatch(addItem(item)),
//   removeItem: item => dispatch(removeItem(item)),
// });

// export default connect(null, mapDispatchToProps)(CheckoutItem);
