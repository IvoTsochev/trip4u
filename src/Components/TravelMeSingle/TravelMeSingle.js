// Utils
import { useState } from 'react'
import { useStateValue } from '../../StateProvider';
// Styling
import './TravelMeSingle.scss'

const TravelMeSingle = ({ data }) => {

    // State
    const [visibleControls, setVisibleControls] = useState(false);
    const [{ user }, dispatch] = useStateValue();

    // console.log(user.email);
    console.log(data.userEmailAddress);

    if (user.email === data.userEmailAddress) {
        setVisibleControls(true)
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
                <p>{data.departureTime}</p>
            </div>
            <div className="travelmesingle--seats">
                <p>{data.availableSeats}</p>
            </div>
            <div className="travelmesingle--phonenumber">
                <p>{data.phoneNumber}</p>
            </div>

            {visibleControls ?
                <div className="travelmesingle--controls">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                :
                ''
            }



        </div>
    )
}

export default TravelMeSingle
