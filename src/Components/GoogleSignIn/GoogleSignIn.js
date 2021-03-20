// Utils
import React from 'react';
import { auth, googleProvider } from '../../firebase';
import { useHistory } from 'react-router-dom';
// Styling
import { Button } from '../../globalStyling';
import './GoogleSignIn.scss';

const GoogleSignIn = () => {

    const history = useHistory();

    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider)
            .then(res => {
                history.push('/main');
            })
    }



    return (
        <div className='googlesignin'>
            <Button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</Button>
            <p>Do not violate the community guidelines or you will be banned for life!</p>
        </div>
    )
}

export default GoogleSignIn;
