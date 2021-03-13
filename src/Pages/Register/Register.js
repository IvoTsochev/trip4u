import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// Styling
import './Register.scss';
import { Button } from '../../globalStyling';

const Register = () => {
    return (
        <div className='register'>
            <Link to='/'>
                <h1>Trip4u</h1>
            </Link>
            <div className="register__form">
                <h2>Register</h2>
                <form>
                    <div className="register__form__email__container">
                        <div className="register__form__email">
                            <h5>E-mail</h5>
                            <input type="text" />
                        </div>

                        <div className="register__form_confirmEmail">
                            <h5>Confirm E-mail</h5>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="register__form__password__container">
                        <div className="register__form__password">
                            <h5>Password</h5>
                            <input type="password" />
                        </div>

                        <div className="register__form__confirmPassword">
                            <h5>Confirm password</h5>
                            <input type="password" />
                        </div>

                    </div>

                    <Button type='submit'>Register</Button>

                </form>
            </div>
        </div>
    )
}

export default Register
