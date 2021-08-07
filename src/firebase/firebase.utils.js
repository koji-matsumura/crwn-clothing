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
  //const collectionRef = firestore.collection(`users`);

  const snapShot = await userRef.get();
  //console.log(snapShot);

  //const collectionSnapshot = await collectionRef.get();
  //console.log({ collection: collectionSnapshot.docs.map(doc => doc.data()) });
  // collection: Array(1)
  // 0:
  // createdAt: t {seconds: 1628068050, nanoseconds: 623000000}
  // displayName: "test"
  // email: "test@test.com"

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

export const addCollectionAnDocuments = async (collectionKey, objectsToAdd) => {
  // Only loading this app, this function will be called.
  const collectionRef = firestore.collection(collectionKey);
  //console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(object => {
    const newDocRef = collectionRef.doc();
    //console.log(newDocRef);
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  //
  const transformedCollection = collections.docs.map(docSnapshot => {
    const { title, items } = docSnapshot.data();
    return {
      // DO NOT FORGET encode and change to lower case.
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items,
    };
  });

  //console.log(transformedCollection);
  // 0: {routeName: "mens", id: "KVKmvqaPYg6nljlPHnbL", title: "Mens", items: Array(6)}
  // 1: {routeName: "womens", id: "PVEEVdLFzgw9TKRsDgzJ", title: "Womens", items: Array(7)}
  // 2: {routeName: "hats", id: "TiBBtUxM5u8ZxNM75lqx", title: "Hats", items: Array(9)}
  // 3: {routeName: "jackets", id: "bCF7CHhJshXg6Jgz6hQ7", title: "Jackets", items: Array(5)}
  // 4: {routeName: "sneakers", id: "w8nQNZQVz8YezNIwC5Io", title: "Sneakers", items: Array(8)}

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

//
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

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
