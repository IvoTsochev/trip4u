// Utils
import React from 'react'
import { Link } from 'react-router-dom'
// Styling
import './Login.scss';
import { Button } from '../../globalStyling'


const Login = () => {
    return (
        <div className='login'>
            <Link to='/'>
                <h1>Trip4u</h1>
            </Link>
            <div className="login__form">
                <h2>Sign-in</h2>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />
                    <Button>Sign In</Button>
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
