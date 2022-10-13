import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA33WMmuUhcCwvI28e6zdk4NkHjmhuJcUA",
    authDomain: "snapchat-clone-d296f.firebaseapp.com",
    projectId: "snapchat-clone-d296f",
    storageBucket: "snapchat-clone-d296f.appspot.com",
    messagingSenderId: "184348123703",
    appId: "1:184348123703:web:89603cfa35574ca7d7d5b2",
    measurementId: "G-G6T1K9M9GV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider};