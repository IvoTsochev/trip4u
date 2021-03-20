// Utils
import React from 'react';
import { auth, googleProvider } from '../../firebase';
// Styling
import { Button } from '../../globalStyling';
import './GoogleSignIn.scss';

const GoogleSignIn = () => {

    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider);
    }



    return (
        <div className='googlesignin'>
            <Button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</Button>
            <p>Do not violate the community guidelines or you will be banned for life!</p>
        </div>
    )
}

export default GoogleSignIn
