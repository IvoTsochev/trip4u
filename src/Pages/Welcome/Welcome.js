// Utils
import React from 'react'
import { Link } from 'react-router-dom'
// Styling
import './Welcome.scss'
import { Button } from '../../globalStyling';

const Welcome = () => {
    return (
        <div className='welcome'>
            <h1>Trip4u</h1>
            <Link to='/login'>
                <Button>Sign In with email</Button>
            </Link>
            <Button>Guest mode</Button>
            <p>Register</p>
        </div>
    )
}

export default Welcome
