// Utils
import { useStateValue } from '../../StateProvider';
import defImg from '../../media/defaultProfileImg.png';
// Styling
import './Profile.scss';

const Profile = () => {

    const [{ user }, dispatch] = useStateValue();

    let photoUrl = '';

    if (user.photoURL) {
        photoUrl = user.photoURL
    } else {
        photoUrl = defImg;
    }


    return (
        <div className='profile'>
            <h2>Dashboard</h2>
            <p>Username: {user.displayName}</p>
            <p>Email address: {user.email}</p>
            <p>Last login: {user.metadata.lastSignInTime}</p>
            <img src={photoUrl} alt="default image" width='150' />
        </div>
    )
}

export default Profile;
