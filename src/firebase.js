import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQjr8_f5busApkF6weC6-OdLwMgOERj2M",
    authDomain: "challenge-87799.firebaseapp.com",
    projectId: "challenge-87799",
    storageBucket: "challenge-87799.appspot.com",
    messagingSenderId: "50592112785",
    appId: "1:50592112785:web:7b58bb7aff42f80f6a1f30",
    measurementId: "G-HEVQ3T235Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };