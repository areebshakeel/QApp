import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBsvyq48k4imEBb7ky1lLuqDmCXIpuo4rg",
  authDomain: "qapp-b2d75.firebaseapp.com",
  databaseURL: "https://qapp-b2d75.firebaseio.com",
  projectId: "qapp-b2d75",
  storageBucket: "qapp-b2d75.appspot.com",
  messagingSenderId: "622054863230",
  appId: "1:622054863230:web:97338e0203a56d5c27032f",
  measurementId: "G-8Y1E93B59F"
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

const store = firebase.firestore();

      function createGroceryList(companyData){
         return store.collection('companyDetails').add(companyData)
     };


export {
    registerUser,
    loginUser,
    getPosts,
    createGroceryList

    
}


