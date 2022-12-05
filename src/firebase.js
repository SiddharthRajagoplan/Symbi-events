import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDViu3XoSeC-xWdSXHMH8rGVDOL7jOsoP8",
  authDomain: "symbi-events.firebaseapp.com",
  projectId: "symbi-events",
  storageBucket: "symbi-events.appspot.com",
  messagingSenderId: "561748595107",
  appId: "1:561748595107:web:2fc800b036c7ede0424a16"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
