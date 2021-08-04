// Import a minimal libraries
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyApmIuzkbwL1kRHIuAm0GguPmMVXD6r9o4',
  authDomain: 'crwn-db-b1375.firebaseapp.com',
  projectId: 'crwn-db-b1375',
  storageBucket: 'crwn-db-b1375.appspot.com',
  messagingSenderId: '706509272804',
  appId: '1:706509272804:web:80eb86c0c911146cf51ef1',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  //const userRef = firestore.doc('users/aiueo'); // exists: false

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  //console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

//
// NOTE: basic usage for Firestore
//
// import firebase from 'firebase/app';
// import 'firebase/firestore';

// const firestore = firebase.firestore();
// firestore
//   .collection('users')
//   .doc('kVX9af2HiNIOK5JvMAwE')
//   .collection('cartItems')
//   .doc('6ZKmHgJli80p4mA2EJup');
// // Same as the above
// firestore.doc('/users/kVX9af2HiNIOK5JvMAwE/cartItems/6ZKmHgJli80p4mA2EJup');
// // Get all documents from a collection
// firestore.collection('/users/kVX9af2HiNIOK5JvMAwE/cartItems');
