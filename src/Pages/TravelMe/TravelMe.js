// Utils
import { useState, useEffect } from 'react';
import firebase from '../../firebase';
import uuid from 'react-uuid';
// Components
import TravelMeSingle from '../../Components/TravelMeSingle/TravelMeSingle'
// Styling
import './TravelMe.scss';

const TravelMe = () => {
    // State
    const [fetchedData, setFetchedData] = useState([]);


    // Fetching data from firebase
    useEffect(() => {
        const fetchedTravelList = firebase.database().ref('TravelList');
        fetchedTravelList.on('value', (snapshot) => {
            const data = snapshot.val();
            const dataArr = [];
            for (let singleTravel in data) {
                dataArr.push(data[singleTravel]);
            }
            setFetchedData(dataArr);
        })
    }, [])


    return (
        <div className='travelme'>
            <div className="travelme__container">
                <p>Searching for a ride...</p>

                <div className="travelme__stats">
                    {fetchedData.map(item => 
                    <TravelMeSingle 
                    data={item} 
                    key={uuid()}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default TravelMe;
