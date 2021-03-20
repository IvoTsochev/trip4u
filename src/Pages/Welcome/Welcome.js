// Utils
import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
// Components
import GoogleSignIn from '../../Components/GoogleSignIn/GoogleSignIn'
// Styling
import './Welcome.scss'
import { Button } from '../../globalStyling';

const Welcome = () => {

    const [{ user }, dispatch] = useStateValue();


    return (
        <div className='welcome'>
            <h1>Trip4u</h1>
            {user ?
                <p className='welcome--msg'>Welcome {user.email}</p>
                :
                (
                    <>
                        <Link to='/login'>
                            <Button>Sign In with email</Button>
                        </Link>

                        <GoogleSignIn />

                        <Link to='/register'>
                            <p className='welcome--register'>Register</p>
                        </Link>
                    </>
                )}

        </div>
    )
}

export default Welcome;
