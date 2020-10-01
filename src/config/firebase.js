import * as firebase from 'react-firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAuZkhnLPSnF2ySGpIBmZB4RbP7LqXFNu8",
    authDomain: "q-app-63ccd.firebaseapp.com",
    databaseURL: "https://q-app-63ccd.firebaseio.com",
    projectId: "q-app-63ccd",
    storageBucket: "q-app-63ccd.appspot.com",
    messagingSenderId: "454000901065",
    appId: "1:454000901065:web:ffb79f09a4840da3cf0618",
    measurementId: "G-CHZ3MD2WFB"
  };

firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth();

function registerUser(email, password){
  return auth.createUserWithEmailAndPassword(email,password)
}

function loginUser(email,password){
    return auth.signInWithEmailAndPassword(email,password)
}
function getPosts(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
}


export {
    registerUser,
    loginUser,
    getPosts
}


