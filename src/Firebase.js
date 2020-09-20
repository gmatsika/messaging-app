import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDXRWEOIAousQTc3h_Y9rcV3InuMmrhpVQ",
    authDomain: "facebook-messenger-clone-ca447.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-ca447.firebaseio.com",
    projectId: "facebook-messenger-clone-ca447",
    storageBucket: "facebook-messenger-clone-ca447.appspot.com",
    messagingSenderId: "948228937327",
    appId: "1:948228937327:web:72d89c7fb4f9caeb55df9a",
    measurementId: "G-911YJWZYGB"

});

const db = firebase.firestore();

export default db; 