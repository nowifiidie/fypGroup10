/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5vhWVDUpI2QH_G1yK2nUP1WcvbRQlA_Q",
  authDomain: "fypgroup10-be4bc.firebaseapp.com",
  projectId: "fypgroup10-be4bc",
  storageBucket: "fypgroup10-be4bc.appspot.com",
  messagingSenderId: "312650338321",
  appId: "1:312650338321:web:d8fe2372292f6b89dca1b0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default getFirestore();

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

