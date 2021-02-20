import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyDxyMWOipdh6CEsXPueV8LQPIWo397sj48",
    authDomain: "firegram-10a47.firebaseapp.com",
    projectId: "firegram-10a47",
    storageBucket: "firegram-10a47.appspot.com",
    messagingSenderId: "929861159728",
    appId: "1:929861159728:web:a723e24b8af155de2096f5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage,projectFirestore,timestamp};