import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAniEjCe-qeCqK9ytqsZ0Q8kmrdly35c14",
    authDomain: "redux-auth-ec314.firebaseapp.com",
    projectId: "redux-auth-ec314",
    storageBucket: "redux-auth-ec314.appspot.com",
    messagingSenderId: "109411259793",
    appId: "1:109411259793:web:ac3211ce3c0e3ae3e2f630"
};

export default firebase.initializeApp(firebaseConfig);