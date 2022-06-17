// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //Firebase github login config
  /* eg
    apiKey: "oooooooiutyyy",
  authDomain: "hghtuejennjfiotngjjiit.firebaseapp.com",
  projectId: "hghtuejennjfiotngjjiit",
  storageBucket: "hghtuejennjfiotngjjiit.appspot.com",
  messagingSenderId: "344558699599884",
  appId: "2:rytutuitiitijhnf:web:56768954999494883883",
  measurementId: "G-ghtghwehwuxb"
  */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
