// Utils
import React from 'react';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';
// Styling
import './UserBar.scss'

const UserBar = () => {

    const [{ user }, dispatch] = useStateValue();

    let handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='userbar' onClick={handleAuthentication}>
            {
                user ?
                    <>
                        <p>Welcome {user.email}</p>
                        <p>Sign out</p>
                    </>
                    :
                    <p style={!user ? { cursor: 'default' } : {}}>
                        Welcome guest
                    </p>
            }
        </div>
    )
}

export default UserBar
