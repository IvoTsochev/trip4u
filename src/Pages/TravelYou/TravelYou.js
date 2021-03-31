// Utils
import { useState, useEffect } from 'react';
import axios from 'axios';
import firebase from '../../firebase';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

// Styling
import './TravelYou.scss';

const TravelYou = () => {
    // State
    const [{ user }, dispatch] = useStateValue();

    const [countryName, setCountryName] = useState('');
    const [currentCityLocation, setCurrentCityLocation] = useState('')
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [availableSeats, setAvailableSeats] = useState('');
    const [departureTime, setDepartureTime] = useState('');



    let displayName = user.displayName;
    console.log(user);
    let userEmailAddress = user.email;

    const history = useHistory();



    // Getting current user location
    useEffect(() => {
        let getGeoInfo = () => {
            axios.get('https://ipapi.co/json')
                .then(res => {
                    setCountryName(res.data.country_name);
                    setCurrentCityLocation(res.data.city);
                })
        }
        getGeoInfo();
    }, [])


    // pushing state to Firebase
    let handleSubmit = () => {
        const travelListRef = firebase.database().ref('TravelList');
        const list = {
            fromCity,
            toCity,
            phoneNumber,
            availableSeats,
            departureTime,
            userEmailAddress,
            displayName
        }

        travelListRef.push(list);
        history.push('/travelme');
    }

    return (
        <div className='travelyou'>
            <div className="travelyou__dashboard">
                <div className="travelyou__inner">
                    <p>I'm offering a ride!</p>
                    <div className="travelyou__input">
                        <div className="travelyou--from">
                            <p>From:</p>
                            {/* input country */}
                            <input type="text" placeholder={countryName} disabled='disabled' />
                            {/* input city */}
                            <input type="text" placeholder={currentCityLocation} onChange={(e) => setFromCity(e.target.value)} value={fromCity} />
                        </div>
                        <div className="travelyou--to">
                            <p>To:</p>
                            {/* input country */}
                            <input type="text" placeholder={countryName} disabled='disabled' />
                            {/* input city */}
                            <input type="text" placeholder='City' onChange={(e) => setToCity(e.target.value)} value={toCity} />
                        </div>
                    </div>
                    {/* input phone number */}
                    <input type="tel" placeholder='My phone number' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                    {/* input seats */}
                    <input type="number" placeholder='Available seats' onChange={(e) => setAvailableSeats(e.target.value)} value={availableSeats} />
                    {/* input time departure */}
                    <label>
                        <p>Time of departure</p>
                        <input type="datetime-local" placeholder='Time of departure' onChange={(e) => setDepartureTime(e.target.value)} value={departureTime} />
                    </label>
                    <input type="submit" className='travelyou--submit' onClick={handleSubmit} />
                </div>
                <div className="travelyou__map">
                    {/* google maps */}
                    <iframe title='Google maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93836.3669779573!2d23.253907149480632!3d42.6955369833744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofia!5e0!3m2!1sen!2sbg!4v1616271720297!5m2!1sen!2sbg" width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}

export default TravelYou;





