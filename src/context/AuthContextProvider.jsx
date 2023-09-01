import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    return (
        <AuthContext.Provider value={{ auth, setAuth, isLogin, setIsLogin }}>
            {children}
        </AuthContext.Provider>
    );
};
