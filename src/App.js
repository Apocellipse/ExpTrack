import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

firebase.initializeApp({
  apiKey: "AIzaSyAt0B6bpfEh8i6-PXJTqRTYTBj7YPTWAu0",
  authDomain: "exproj-5b6b4.firebaseapp.com",
  projectId: "exproj-5b6b4",
  storageBucket: "exproj-5b6b4.appspot.com",
  messagingSenderId: "908930290505",
  appId: "1:908930290505:web:c18740635d220a2e908098"
})

const auth = firebase.auth();

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <>
    <div className='loginPage'>
      <h1 className='tracker'>Expense Tracker</h1>
      <br/><br/>
      <img className='google' src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"></img><button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <br/><br/>
    </div>
    </>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <SignOut />
      </header>
      <section>
        {user ? <Tracker /> : <SignIn />}
      </section>
    </div>
  );
}

function Tracker() {
  return(
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}
export default App;
