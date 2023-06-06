import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAfDKXPEsR45A6db3xV-XQXazAHJX2oOPo",
    authDomain: "examshop-ee0d4.firebaseapp.com",
    projectId: "examshop-ee0d4",
    storageBucket: "examshop-ee0d4.appspot.com",
    messagingSenderId: "27782486403",
    appId: "1:27782486403:web:1f5c55ec93a29418eb7eb6"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);



