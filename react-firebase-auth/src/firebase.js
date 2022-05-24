import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCcCX1HjbzN0k0Xv_hbTfDltDAZ7PNFhaQ",
  authDomain: "it-ms-site.firebaseapp.com",
  projectId: "it-ms-site",
  storageBucket: "it-ms-site.appspot.com",
  messagingSenderId: "204813182240",
  appId: "1:204813182240:web:1b64f032abfef894ea2345"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export  {auth,googleAuthProvider,facebookAuthProvider};