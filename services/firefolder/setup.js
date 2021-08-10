import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = require('./firedata.json');

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

// Firebase product objects
export var auth = firebase.auth();
export var googleAuth = new firebase.auth.GoogleAuthProvider();
export var db = firebase.firestore();