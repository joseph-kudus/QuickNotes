import React, {createContext, useContext, useState, useEffect} from "react";

import{
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
}from 'firebase/auth';
import { auth } from '../../firebaseconfig';
import { User } from 'lucide-react';

const AuthContext=createContext();
export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser]=useState(null);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState("");

    async function signup(email, password) {
        setError("")
        try{
            return await createUserWithEmailAndPassword(auth, email, password);
        }catch(err){
            setError(err.message)
            throw err;
        }
    }
    async function login(email, password) {
        setError("")
        try{
            return await signInWithEmailAndPassword(auth, email, password);
        }catch(err){
            setError(err.message)
            throw err;
        }
    }

    async function logout() {
        setError("")
        try{
            return await logout(auth);
        }catch(err){
            setError(err.message)
            throw err;
        }
    }

    useEffect (()=>{
        const unscribe = onAuthStateChanged(auth, (User)=>{
            setCurrentUser(User);
            setLoading(false)
        })
        return unscribe;
    },[]); 

    const value={
        currentUser,
        signOut,
        logout,
        login,
        error,
        loading,
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}