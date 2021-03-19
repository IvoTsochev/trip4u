import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

// #f57207


const Main = () => {
    return (
        <div className='main'>
            <div className="travel__me">
                <h2>Travel.Me</h2>
                <p>Looking for a ride</p>
            </div>
            <div className="travel__you">
                <h2>Travel.You</h2>
                <p>I can offer a ride</p>
            </div>
        </div>
    )
}

export default Main
