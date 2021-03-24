// Utils
import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
// Components
import TravelMeSingle from '../../Components/TravelMeSingle/TravelMeSingle'
// Styling
import './TravelMe.scss';

const TravelMe = () => {
    // State
    const [fetchedData, setFetchedData] = useState([]);
    // const [fromFilter, setFromFilter] = useState('');
    // const [toFilter, setToFilter] = useState('');
    // const [onDayFilter, setOnDayFilter] = useState('');

    // Fetching data from firebase
    useEffect(() => {
        const fetchedTravelList = firebase.database().ref('TravelList');
        fetchedTravelList.on('value', (snapshot) => {
            const data = snapshot.val();
            const dataArr = [];
            for (let id in data) {
                dataArr.push(data[id]);
            }
            setFetchedData(dataArr);
            console.log(dataArr);
        })
    }, [])


    return (
        <div className='travelme'>
            <div className="travelme__container">
                <p>Searching for a ride...</p>
                {/* <div className="travelme__filter">
                    <input type="text" 
                    placeholder='From...' 
                    onChange={(e) => {setFromFilter(e.target.value)}} 
                    value={fromFilter} />
                    <input 
                    type="text" 
                    placeholder='To...'                     
                    onChange={(e) => {setToFilter(e.target.value)}} 
                    value={toFilter} />
                    <input 
                    type="text" 
                    placeholder='On day...' 
                    onChange={(e) => {setOnDayFilter(e.target.value)}}
                    value={onDayFilter} />
                
                </div> */}
                <div className="travelme__stats">
                    {fetchedData.map(item => <TravelMeSingle 
                    data={item} 
                    // fromFilter={fromFilter}
                    // toFilter={toFilter}
                    // onDayFilter={onDayFilter}
                    />)}

                </div>
            </div>
        </div>
    )
}

export default TravelMe;
