import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXc4LOMg5i_XNFCZIrlK4bgJSyTrqfo0M",
    authDomain: "koko-291d7.firebaseapp.com",
    projectId: "koko-291d7",
    storageBucket: "koko-291d7.appspot.com",
    messagingSenderId: "723941707304",
    appId: "1:723941707304:web:d757db9ed3b33fc4482f1d",
    measurementId: "G-2ZN8T09JPT"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebase.firestore() //here we were creating database after here go to firebase site and create database
  const auth=firebase.auth()//here is for authetication

  const provider=new firebase.auth.GoogleAuthProvider()//this tell firebase we want google login service

  //this below is to access this staff outside here
  export {auth,provider};
  export default db;
