// context/AuthContext.jsx
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/data/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
      console.log("User: ", user);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Registro exitoso");
    } catch (error) {
      throw error;
    }
  };

  const logIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        window.location.href = "/admin";
      } else {
        throw new Error("Error de autenticación");
      }
    } catch (error) {
      throw error;
    }
  };

  const logOut = async () => {
    setUser(null);
    return await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
