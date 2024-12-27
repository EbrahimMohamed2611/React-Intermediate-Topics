import React, {ReactNode, useReducer} from 'react';
import AuthContext from './contexts/authContext';
import authReducer from "./loginReducer";

interface Props {
    children: ReactNode
}

const AuthProvider = ({children}: Props) => {
    const [user, authDispatch] = useReducer(authReducer, '');
    return (
        <AuthContext.Provider value={{user, dispatch: authDispatch}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
