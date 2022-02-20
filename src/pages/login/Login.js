import React, { useState, useContext } from 'react';
import './Login.css';
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    const { state, dispatch } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        console.log("Email " + email);
        const user = {
            token: 'abcd1234566',
            email: email
        }
        localStorage.setItem('user', JSON.stringify(user));
        // dispatch action to the reducer
        dispatch({ type: 'USER', payload: user });
        navigate('/');
    }

    return (
        <div className='container'>
            <h1>Login Form</h1>
            <div>
                <p>
                    <label htmlFor='email'>Email</label>
                    <input onChange={(event) => setEmail(event.target.value)} type='text' id='email' />
                </p>
                <p>
                    <label htmlFor='password'>Password</label>
                    <input onChange={(event) => setPassword(event.target.value)} type='password' id='password' />
                </p>
                <button onClick={() => login()}>Login</button>
            </div>
        </div>
    )
}

export default Login