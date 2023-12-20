import React from 'react';
import { createContext, useState } from 'react';
export const UserContext = createContext(null)
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)






    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;