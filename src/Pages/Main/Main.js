// Utils
import { Link } from 'react-router-dom';
// Styling
import './Main.scss';



const Main = () => {
    return (
        <div className='main'>
            <Link to='/travelme'>
                <div className="travel__me">
                    <h2>Travel.Me</h2>
                    <p>Looking for a ride</p>
                </div>
            </Link>

            <Link to='/travelyou'>
                <div className="travel__you">
                    <h2>Travel.You</h2>
                    <p>I can offer a ride</p>
                </div>
            </Link>
        </div>
    )
}

export default Main
