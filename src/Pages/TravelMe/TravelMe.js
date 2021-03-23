// Utils
import React, { useEffect } from 'react'
import firebase from '../../firebase';
// Styling
import './TravelMe.scss';

const TravelMe = () => {

    useEffect(() => {
        const fetchedTravelList = firebase.database().ref('TravelList');
        fetchedTravelList.on('value', (snapshot) => {
            console.log(snapshot.val());
        })

    }, [])


    return (
        <div className='travelme'>
            <div className="travelme__container">
                <p>Searching for a ride...</p>
                <div className="travelme__filter"></div>
                <div className="travelme__stats">

                </div>
            </div>
        </div>
    )
}

export default TravelMe;
