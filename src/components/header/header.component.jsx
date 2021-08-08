import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContiner,
  OptionLink,
} from './header.styles';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import CurrentUserContext from '../../contexts/current-user/current-user.context';
//import CartContext from '../../contexts/cart/cart.context';
import { CartContext } from '../../providers/cart/cart.provider';

// NOTE: App component provides currentUserContext, so we remove it from props.
//
//const Header = ({ hidden, signOutStart }) => {
const Header = ({ signOutStart }) => {
  // NOTE: Before using provider, we used only context instead.
  // const [hidden, setHidden] = useState(true);
  // const toggleHidden = () => setHidden(!hidden); // link to anonymous function defined in cart.context.js

  const { hidden } = useContext(CartContext);
  const currentUser = useContext(CurrentUserContext);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContiner>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            Sign out
          </OptionLink>
        ) : (
          <OptionLink to="/signin">Sign in</OptionLink>
        )}
        {/* <CartContext.Provider value={{ hidden, toggleHidden }}>
          <CartIcon />
        </CartContext.Provider> */}
        <CartIcon />
      </OptionsContiner>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

//
// *** Before using context

// import React, { useContext } from 'react';
// //import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { ReactComponent as Logo } from '../../assets/crown.svg';
// //import './header.styles.scss';
// import {
//   HeaderContainer,
//   LogoContainer,
//   OptionsContiner,
//   OptionLink,
//   //  OptionDiv,
// } from './header.styles';

// //import { auth } from '../../firebase/firebase.utils';
// import CartIcon from '../cart-icon/cart-icon.component';
// import CartDropDown from '../cart-dropdown/cart-dropdown.component';
// import { selectCartHidden } from '../../redux/cart/cart.selectors';
// //import { selectCurrentUser } from '../../redux/user/user.selectors';
// import { signOutStart } from '../../redux/user/user.actions';
// import CurrentUserContext from '../../contexts/current-user/current-user.context';
// import CartContext from '../../contexts/cart/cart.context';

// // NOTE: App component provides currentUserContext, so we remove it from props.
// //
// // const Header = ({ currentUser, hidden, signOutStart }) => {
// const Header = ({ hidden, signOutStart }) => {
//   const currentUser = useContext(CurrentUserContext);

//   return (
//     <HeaderContainer>
//       <LogoContainer to="/">
//         <Logo className="logo" />
//       </LogoContainer>
//       <OptionsContiner>
//         <OptionLink to="/shop">SHOP</OptionLink>
//         <OptionLink to="/shop">CONTACT</OptionLink>
//         {currentUser ? (
//           // <OptionLink as="div" onClick={() => auth.signOut()}>
//           <OptionLink as="div" onClick={signOutStart}>
//             Sign out
//           </OptionLink>
//         ) : (
//           <OptionLink to="/signin">Sign in</OptionLink>
//         )}
//         <CartIcon />
//       </OptionsContiner>
//       {hidden ? null : <CartDropDown />}
//     </HeaderContainer>
//   );
// };

// // Top leveled state
// // const mapStateToProps = state => ({
// //   currentUser: selectCurrentUser(state),
// //   hidden: selectCartHidden(state),
// // });

// // same as the above
// const mapStateToProps = createStructuredSelector({
//   //currentUser: selectCurrentUser,
//   hidden: selectCartHidden,
// });

// const mapDispatchToProps = dispatch => ({
//   signOutStart: () => dispatch(signOutStart()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Header);
