// way to store global state
// allows us to manage state
// what does state mean exactly?
// store state in a react hook like using useState()

"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "@/lib/firebase.config";
import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext({}); // creating container - creating the context - this a react hook

const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect hook - hooks into other features outside of component
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => unsubscribe(); // clean up function - remove the listener
  }, []);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, signInWithGoogle, signOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
