// Utils
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
// Styling
import './Login.scss';
import { Button } from '../../globalStyling';


const Login = () => {
    // State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Sign in handler
    const signIn = e => {
        e.preventDefault();





    }


    return (
        <div className='login'>
            <Link to='/'>
                <h1>Trip4u</h1>
            </Link>
            <div className="login__form">
                <h2>Sign-in</h2>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <Button type='submit' onClick={signIn}>Sign In</Button>
                    <p>
                        Don't have an account?
                        <Link to='/register'>Register</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
