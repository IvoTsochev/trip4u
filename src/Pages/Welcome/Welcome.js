// Utils
import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

// Styling
import './Welcome.scss'
import { Button } from '../../globalStyling';

const Welcome = () => {

    const [{ user }, dispatch] = useStateValue();


    return (
        <div className='welcome'>
            <h1>Trip4u</h1>
            {user ?
                <p classname='welcome--msg'>Welcome {user.email}</p>
                :
                (
                    <>
                        <Link to='/login'>
                            <Button>Sign In with email</Button>
                        </Link>

                        <Link to='/register'>
                            <p>Register</p>
                        </Link>
                    </>
                )}

        </div>
    )
}

export default Welcome
