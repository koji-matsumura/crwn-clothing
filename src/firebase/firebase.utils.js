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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
