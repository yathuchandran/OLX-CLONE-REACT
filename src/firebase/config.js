


import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBiRXh4iPWW5sB3BhaffGogN8RZrJfU6VA",
    authDomain: "olx-clone-67d09.firebaseapp.com",
    projectId: "olx-clone-67d09",
    storageBucket: "olx-clone-67d09.appspot.com",
    messagingSenderId: "361950963065",
    appId: "1:361950963065:web:64dc5e7e5f645484b2fba8",
    measurementId: "G-WQR7R2PFXP"
  };

  export default firebase.initializeApp(firebaseConfig)