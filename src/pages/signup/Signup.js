import React from 'react';
import './Signup.css';

function Signup() {
    return (
        <div className='container'>
            <h1>Create new account</h1>
            <div>
                <p>
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' />
                </p>
                <p>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' />
                </p>
                <button>Signup</button>
            </div>
        </div>
    )
}

export default Signup