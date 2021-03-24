// Utils
import React from 'react'
// Styling
import './TravelMeSingle.scss'

const TravelMeSingle = ({ data,fromFilter, toFilter, onDayFilter }) => {



    return (
        <div className='travelmesingle'>
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

        </div>
    )
}

export default TravelMeSingle
