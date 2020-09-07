import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBpXgNEw3OfeM5PTTm7ucxRLfLzY90s6EQ",
  authDomain: "aditya-fb-clone.firebaseapp.com",
  databaseURL: "https://aditya-fb-clone.firebaseio.com",
  projectId: "aditya-fb-clone",
  storageBucket: "aditya-fb-clone.appspot.com",
  messagingSenderId: "319999977572",
  appId: "1:319999977572:web:095fd50ea11efef504d771",
  measurementId: "G-W7WPSWNYD0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
