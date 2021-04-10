// Utils
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';
import { Link, useHistory } from 'react-router-dom';
// Styling
import './UserBar.scss'

const UserBar = ({ location }) => {

    let logo = '';
    if (location.pathname === '/travelyou') {
        logo = 'Travel You';
    } else if (location.pathname === '/travelme') {
        logo = 'Travel Me';
    }

    // State
    const [{ user }, dispatch] = useStateValue();

    let history = useHistory();


    console.log(user);

    let currentPathname = false;
    if (history.location.pathname === '/profile') {
        currentPathname = true;
    } else {
        currentPathname = false;
    }


    // SING OUT FUNC
    let handleAuthentication = () => {
        if (user) {
            auth.signOut();
            history.push('/login');
        }
    }

    return (
        <div className='userbar'>
            <div className="userbar--logo">
                <Link to='/main'>
                    {logo}
                </Link>
            </div>
            {
                user ?
                    <>
                        <p>Welcome <span>{user.displayName}</span></p>
                        <p>
                            {!currentPathname ? (<Link to='/profile'>Profile</Link>) : (<Link to='/main'>Dashboard</Link>)}
                        </p>
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
