// Utils
import React from 'react';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';
import { Link, useHistory } from 'react-router-dom';
// Styling
import './UserBar.scss'

const UserBar = () => {

    const [{ user }, dispatch] = useStateValue();

    let history = useHistory();

    // SING OUT FUNC
    let handleAuthentication = () => {
        if (user) {
            auth.signOut();
            history.push('/login');
        }
    }

    return (
        <div className='userbar'>
            {
                user ?
                    <>
                        <p>Welcome {user.email}</p>
                        <p><Link to='/profile'>Profile</Link></p>
                        <p onClick={handleAuthentication}>Sign out</p>
                    </>
                    :
                    <p style={!user ? { cursor: 'default' } : {}}>
                        Welcome Guest
                    </p>
            }
        </div>
    )
}

export default UserBar
