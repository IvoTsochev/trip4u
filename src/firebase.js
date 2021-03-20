import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyCpC1JFGhTLlgBtpXR8N4HAygEfN5aue_4",
    authDomain: "trip4u-df2e8.firebaseapp.com",
    projectId: "trip4u-df2e8",
    storageBucket: "trip4u-df2e8.appspot.com",
    messagingSenderId: "350420179923",
    appId: "1:350420179923:web:23c0ae0481a793b6b76d26",
    measurementId: "G-0P46QCW7NF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider()

const auth = firebase.auth();


export { db, auth, googleProvider };