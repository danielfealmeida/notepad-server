import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAuvHRLF7g1aDVbj796aubJPdTyis6Rnec",
    authDomain: "notepad-13.firebaseapp.com",
    databaseURL: "https://notepad-13.firebaseio.com",
    projectId: "notepad-13",
    storageBucket: "notepad-13.appspot.com",
    messagingSenderId: "342212400466",
    appId: "1:342212400466:web:4885567ba1033efe60568b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebase.firestore()