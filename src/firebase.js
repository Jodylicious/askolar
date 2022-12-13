import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWdxPUsgw9FYuEpp7t3HQlZGKJG07wkvQ",
  authDomain: "login-auth-adbb2.firebaseapp.com",
  databaseURL: "https://login-auth-adbb2-default-rtdb.firebaseio.com",
  projectId: "login-auth-adbb2",
  storageBucket: "login-auth-adbb2.appspot.com",
  messagingSenderId: "938130585688",
  appId: "1:938130585688:web:d726540612243cef68322d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}


// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}