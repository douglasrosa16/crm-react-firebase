import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

//APP - BACKEND no FIREBASE
let firebaseConfig = {
  apiKey: "AIzaSyC648E_U2NZYXlhCU_BxfpA1na2_QIcVJk",
  authDomain: "udemy-react-20dbf.firebaseapp.com",
  projectId: "udemy-react-20dbf",
  storageBucket: "udemy-react-20dbf.appspot.com",
  messagingSenderId: "1089773785316",
  appId: "1:1089773785316:web:a05034b163c4c21d7c9cf1",
  measurementId: "G-6C67X70MG5"
};
// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
