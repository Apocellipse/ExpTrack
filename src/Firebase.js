import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAt0B6bpfEh8i6-PXJTqRTYTBj7YPTWAu0",
  authDomain: "exproj-5b6b4.firebaseapp.com",
  projectId: "exproj-5b6b4",
  storageBucket: "exproj-5b6b4.appspot.com",
  messagingSenderId: "908930290505",
  appId: "1:908930290505:web:c18740635d220a2e908098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const provider = new GoogleAuthProvider()
// export const signInWithGoogle = () => {
//     signInWithPopup(auth, provider).
//     then((result)=>{
//         const name = result.user.displayName;
//         localStorage.setItem("name", name);
//     }).catch((error)=>{

//     })
// };