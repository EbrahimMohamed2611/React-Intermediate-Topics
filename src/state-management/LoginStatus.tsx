import React, {useReducer, useState} from 'react';
import authReducer from "./loginReducer";

const LoginStatus = () => {
    // const [user, setUser] = useState('');

    const [state, dispatch] = useReducer(authReducer, '');

    if (state)
        return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link">{state}</a>
                </li>
                <li className="nav-item">
                    <a onClick={() => dispatch({type: 'LOGOUT'})} className="nav-link active" href="#"> Logout</a>
                </li>
            </ul>
        </nav>)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="nav">
                    <li className="nav-item">
                        <a onClick={() => {
                            dispatch({type: 'LOGIN', userName: 'ebrahim.elmohamed26@gmail.com'})
                        }} className="nav-link active" href="#">Login</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default LoginStatus;
