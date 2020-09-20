import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "XXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXXXXX",
    measurementId: "XXXXXXXXXXXXXXXXXXXX"

});

const db = firebase.firestore();

export default db; 