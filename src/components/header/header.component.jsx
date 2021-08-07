import React from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
//import './header.styles.scss';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContiner,
  OptionLink,
  //  OptionDiv,
} from './header.styles';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContiner>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        // <OptionLink as="div" onClick={() => auth.signOut()}>
        <OptionLink as="div" onClick={signOutStart}>
          Sign out
        </OptionLink>
      ) : (
        <OptionLink to="/signin">Sign in</OptionLink>
      )}
      <CartIcon />
    </OptionsContiner>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

// Top leveled state
// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state),
// });

// same as the above
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
