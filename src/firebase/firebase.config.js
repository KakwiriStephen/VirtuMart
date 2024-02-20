// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbILQYkXZcP8gEYfVY77o1FDolmCU2pY8",
    authDomain: "catalogue-react-js.firebaseapp.com",
    projectId: "catalogue-react-js",
    storageBucket: "catalogue-react-js.appspot.com",
    messagingSenderId: "1031269866709",
    appId: "1:1031269866709:web:a4ec404d4d462adf8b165c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

//NOT STORED IN THE .env.local FILE FOR DEMONSTRATION PURPOSES
//I AM AWARE THAT THIS IS NOT A GOOD PRACTICE