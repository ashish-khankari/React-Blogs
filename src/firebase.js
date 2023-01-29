import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/analytics'

const firebaseConfig = {
      apiKey: "AIzaSyB0aWbfrTEr21elWU5YRIR19PkiAQalRp8",
      authDomain: "react-hooks-blog-de79c.firebaseapp.com",
      projectId: "react-hooks-blog-de79c",
      storageBucket: "react-hooks-blog-de79c.appspot.com",
      messagingSenderId: "779223959656",
      appId: "1:779223959656:web:e3d04ca182b1333f6a13dd"
    };
  
//   const auth = firebase.auth();
// const analytics = firebase.analytics()

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();


