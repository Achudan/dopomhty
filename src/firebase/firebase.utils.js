import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyBfU4gzhZvdDSdvXdqcmxuRXpdDD6z1AVY",
  authDomain: "dopomohty-b046a.firebaseapp.com",
  projectId: "dopomohty-b046a",
  storageBucket: "dopomohty-b046a.appspot.com",
  messagingSenderId: "549594570994",
  appId: "1:549594570994:web:5e432a2ca09ba6591b306b",
  measurementId: "G-RJB32ZJTRK"
};

export const createUserProfileDocument = async (userAuth, otherData) =>{
  if(!userAuth){
    return;
  }

  const docRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await docRef.get();

  if(!snapShot.exists){
    console.log('creating new user')
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await docRef.set({displayName, email, createdAt, ...otherData})
    }
    catch(error){
      console.log('error creating user', error.message())
    }
  }
  return docRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;