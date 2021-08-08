import React, { useState } from 'react';
import { connect } from 'react-redux';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

// class SignIn extends React.Component {
//   constructor(props) {
//     super();

//     this.state = {
//       email: '',
//       password: '',
//     };
//   }

// NOTE: need to destruct props here.
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  //
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials; //this.state;

  const handleSubmit = async event => {
    event.preventDefault();
    //const { emailSignInStart } = this.props;

    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    // this.setState({ [name]: value });
    setCredentials({ ...userCredentials, [name]: value });
  };

  // render() {
  //   const { googleSignInStart } = this.props;

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      {/* <form onSubmit={this.handleSubmit}> */}
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          // value={this.state.email}
          value={email}
          // handleChange={this.handleChange}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          // value={this.state.password}
          value={password}
          // handleChange={this.handleChange}
          handleChange={handleChange}
          label="password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            {' '}
            Sign in with Google{' '}
          </CustomButton>
        </div>
      </form>
    </div>
  );
  // }
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);

//
// *** Before using Hooks ***
//

// import React from 'react';
// import { connect } from 'react-redux';
// import './sign-in.styles.scss';
// import FormInput from '../form-input/form-input.component';
// import CustomButton from '../custom-button/custom-button.component';

// //import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
// import {
//   googleSignInStart,
//   emailSignInStart,
// } from '../../redux/user/user.actions';

// class SignIn extends React.Component {
//   constructor(props) {
//     super();

//     this.state = {
//       email: '',
//       password: '',
//     };
//   }

//   handleSubmit = async event => {
//     event.preventDefault();
//     const { emailSignInStart } = this.props;
//     const { email, password } = this.state;

//     emailSignInStart(email, password);

//     // try {
//     //   await auth.signInWithEmailAndPassword(email, password);
//     //   this.setState({ email: '', password: '' });
//     // } catch (error) {
//     //   console.log(error);
//     // }
//   };

//   handleChange = event => {
//     const { value, name } = event.target;

//     this.setState({ [name]: value });
//   };

//   render() {
//     const { googleSignInStart } = this.props;

//     return (
//       <div className="sign-in">
//         <h2>I already have an account</h2>
//         <span>Sign in with your email and password</span>

//         <form onSubmit={this.handleSubmit}>
//           <FormInput
//             name="email"
//             type="email"
//             value={this.state.email}
//             handleChange={this.handleChange}
//             label="email"
//             required
//           />

//           <FormInput
//             name="password"
//             type="password"
//             value={this.state.password}
//             handleChange={this.handleChange}
//             label="password"
//             required
//           />

//           <div className="buttons">
//             <CustomButton type="submit"> Sign in </CustomButton>
//             <CustomButton
//               type="button"
//               onClick={googleSignInStart}
//               // onClick={signInWithGoogle}
//               isGoogleSignIn
//             >
//               {' '}
//               Sign in with Google{' '}
//             </CustomButton>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   googleSignInStart: () => dispatch(googleSignInStart()),
//   emailSignInStart: (email, password) =>
//     dispatch(emailSignInStart({ email, password })),
// });

// export default connect(null, mapDispatchToProps)(SignIn);
