import React, {useContext} from 'react';
import AuthContext from "./contexts/authContext";

const LoginStatus = () => {
    // const [user, setUser] = useState('');

    // const [state, dispatch] = useReducer(authReducer, '');


    const {user, dispatch} = useContext(AuthContext);

    if (user)
        return (
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link">{user}</a>
                </li>
                <li className="nav-item">
                    <a onClick={() => dispatch({type: 'LOGOUT'})} className="nav-link active" href="#"> Logout</a>
                </li>
            </ul>
        )
    return (
        <>
            <ul className="nav">
                <li className="nav-item">
                    <a onClick={() => {
                        dispatch({type: 'LOGIN', userName: 'ebrahim.elmohamed26@gmail.com'})
                    }} className="nav-link active" href="#">Login</a>
                </li>
            </ul>
        </>
    );
};

export default LoginStatus;
