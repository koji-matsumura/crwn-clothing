import React, { useState } from 'react';
import { connect } from 'react-redux';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';
//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

// class SignUp extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       displayName: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     };
//   }

// NOTE: need to destruct props here.
const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // NOTE: useful to destruct the old state by using values in useState.
  const { displayName, email, password, confirmPassword } = userCredentials;

  //handleSubmit = async event => {
  const handleSubmit = async event => {
    event.preventDefault();
    //const { signUpStart } = this.props;
    //const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  // handleChange = event => {
  const handleChange = event => {
    const { name, value } = event.target;

    //this.setState({ [name]: value });
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  // render() {
  //   const { displayName, email, password, confirmPassword } = this.state;
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      {/* <form className="sign-up-form" onSubmit={this.handleSubmit}> */}
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          // onChange={this.handleChange}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          // onChange={this.handleChange}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          // onChange={this.handleChange}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          // onChange={this.handleChange}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
  // }
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
