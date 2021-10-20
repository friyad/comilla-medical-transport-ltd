import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthProvider = createContext()

const AuthContext = ({ children }) => {
    const firebaseData = useFirebase()
    return (
        <AuthProvider.Provider value={firebaseData}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;