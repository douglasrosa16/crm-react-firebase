import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

//APP - BACKEND no FIREBASE
let firebaseConfig = {
  apiKey: "AIzaSyBGrfwSRxEB8PSv6jX4cYLgBWY8ufoF3tY",
  authDomain: "backend-1deeb.firebaseapp.com",
  projectId: "backend-1deeb",
  storageBucket: "backend-1deeb.appspot.com",
  messagingSenderId: "550474967372",
  appId: "1:550474967372:web:5e984d3d9fb8c3237e07e9"
};
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
