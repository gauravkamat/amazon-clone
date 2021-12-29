
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC__sE1WBpqhKquNaRx8RZtTJGFX9OLlmU",
  authDomain: "clone-62eb7.firebaseapp.com",
  projectId: "clone-62eb7",
  storageBucket: "clone-62eb7.appspot.com",
  messagingSenderId: "82950683593",
  appId: "1:82950683593:web:a793f805c6e4061ac40618"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };