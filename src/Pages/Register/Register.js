import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
// Styling
import './Register.scss';
import { Button } from '../../globalStyling';
import userEvent from '@testing-library/user-event';

const Register = () => {
    // State
    const [allInputsCorret, setAllInputsCorrect] = useState(false);
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const history = useHistory();


    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))
    }


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
                            <input type="text"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="register__form_confirmEmail">
                            <h5>Confirm E-mail</h5>
                            <input type="text"
                                value={confirmEmail}
                                onChange={e => setConfirmEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="register__form__password__container">
                        <div className="register__form__password">
                            <h5>Password</h5>
                            <input type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="register__form__confirmPassword">
                            <h5>Confirm password</h5>
                            <input type="password"
                                value={confirmPass}
                                onChange={e => setConfirmPass(e.target.value)}
                            />
                        </div>

                    </div>

                    <Button type='submit' onClick={register}>Register</Button>

                </form>
            </div>
        </div>
    )
}

export default Register
