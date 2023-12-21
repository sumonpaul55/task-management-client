import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import app from '../../firebase.config';
import { FacebookAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
// import useAxios from '../hooks/useAxios';

// getting auth
const auth = getAuth(app)
export const UserContext = createContext(null)
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // const { axiosPublic } = useAxios()
    // login with google
    const googleProvider = new GoogleAuthProvider()


    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // logini with facebook
    const facebookProvider = new FacebookAuthProvider();

    const loginWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, curentUser => {
            setUser(curentUser)
            setLoading(false)
        })
        return () => {
            unSubcribe();
        }
    }, [])


    const userInfo = {
        user,
        loading,
        register,
        loginWithGoogle,
        logOut,
        loginWithFacebook
    }



    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;