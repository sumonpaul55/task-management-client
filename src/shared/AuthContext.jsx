import React from 'react';
import { createContext, useState } from 'react';
import app from '../../firebase.config';
import { getAuth } from "firebase/auth";

// getting auth
const auth = getAuth(app)

export const UserContext = createContext(null)
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)







    const userInfo = {
        user,
        loading
    }



    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;