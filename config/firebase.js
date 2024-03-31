
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlo1QNgd7addefqctfh1js_sBsOPMjBPQ",
    authDomain: "gratinotee.firebaseapp.com",
    projectId: "gratinotee",
    storageBucket: "gratinotee.appspot.com",
    messagingSenderId: "831471743361",
    appId: "1:831471743361:web:5c08071dc0b35fc5a4f880"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth };
