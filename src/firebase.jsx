   // Import the functions you need from the SDKs you need
   import { initializeApp } from "firebase/app";
   import {getAuth, GoogleAuthProvider} from 'firebase/auth';
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
   
   // Your web app's Firebase configuration
   const firebaseConfig = {
     apiKey: "AIzaSyA6NkW3Kqn2S9qhmpqqmAvQFPQX0jLHy0k",
     authDomain: "ecommerc-store.firebaseapp.com",
     projectId: "ecommerc-store",
     storageBucket: "ecommerc-store.appspot.com",
     messagingSenderId: "185230806048",
     appId: "1:185230806048:web:11871408a41d7da470c045"
   };
   
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const auth =getAuth(app)
   const provider=new GoogleAuthProvider();
   export {auth,provider}