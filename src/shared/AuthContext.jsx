import React, { createContext, useState } from 'react';
export const authContext = createContext(null)
const AuthContext = () => {
    const [user, setUser] = useState(null)
    return (
        <div>

        </div>
    );
};

export default AuthContext;