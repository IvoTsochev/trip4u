// Utils
import { useState, useEffect } from 'react'
import { useStateValue } from '../../StateProvider';
import firebase from '../../firebase'
// Styling
import './TravelMeSingle.scss'

const TravelMeSingle = ({ data, id }) => {

    // State
    const [{ user }, dispatch] = useStateValue();
    const [visibleControls, setVisibleControls] = useState(false);

    useEffect(() => {
        checkUser()
    }, [])

    let checkUser = () => {
        if (user.displayName === data.displayName) {
            setVisibleControls(true)
        }
    }


    let deleteTripHandler = () => {
        const tripRef = firebase.database().ref('TravelList').child(id);
        tripRef.remove();
    }


    return (
        <div className='travelmesingle'>
            <div className="travelmesingle--displayName">
                <p>{data.displayName}</p>
            </div>
            <div className="travelmesingle--fromcity">
                <p>{data.fromCity}</p>
            </div>
            <div className="travelmesingle--tocity">
                <p>{data.toCity}</p>
            </div>
            <div className="travelmesingle--departuretime">
                <p>{data.departureTime.split('T').join(' ')}</p>
            </div>
            <div className="travelmesingle--seats">
                <p>{data.availableSeats}</p>
            </div>
            <div className="travelmesingle--phonenumber">
                <p>{data.phoneNumber}</p>
            </div>

            {visibleControls ?
                <div className="travelmesingle--controls">
                    {/* <button>Edit</button> */}
                    <p className='travelmesingle--delete' onClick={deleteTripHandler}>Delete</p>
                </div>
                :
                ''
            }



        </div>
    )
}

export default TravelMeSingle
