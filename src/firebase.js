import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDrvpWmq3bbpBaBLpkvNPXx17wLWReBbDc",
  authDomain: "clone-d69b6.firebaseapp.com",
  databaseURL: "https://clone-d69b6.firebaseio.com",
  projectId: "clone-d69b6",
  storageBucket: "clone-d69b6.appspot.com",
  messagingSenderId: "780650100165",
  appId: "1:780650100165:web:82843a561e969cf98d87ac",
  measurementId: "G-XHRM36XGT7",
});

const auth = firebase.auth();

export { auth };