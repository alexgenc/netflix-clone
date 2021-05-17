import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDIx0iV8IReWKPT-4bfbLMmeZCgGdsNfjc",
  authDomain: "alexgenc-netflix-clone.firebaseapp.com",
  projectId: "alexgenc-netflix-clone",
  storageBucket: "alexgenc-netflix-clone.appspot.com",
  messagingSenderId: "601888012206",
  appId: "1:601888012206:web:0b632e4d4f75335c29ba3f"
};

const firebase = Firebase.initializeApp(config);

export { firebase };