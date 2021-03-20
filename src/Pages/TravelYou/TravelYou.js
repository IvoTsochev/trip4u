// Utils
import React from 'react';
// Styling
import './TravelYou.scss';

const TravelYou = () => {



    return (
        <div className='travelyou'>
            <div className="travelyou__dashboard">
                <div className="travelyou__input">
                    <p>I'm offering a ride!</p>
                    <div className="travelyou--from">
                        <p>From:</p>
                        {/* input country */}
                        {/* input city */}
                    </div>
                    <div className="travelyou--to">
                        <p>To:</p>
                        {/* input country */}
                        {/* input city */}
                    </div>
                    {/* input number */}
                    {/* input seats */}
                    {/* input time departure */}
                </div>
                <div className="travelyou__map">
                    {/* google maps */}
                </div>
            </div>
        </div>
    )
}

export default TravelYou
