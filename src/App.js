// Utils
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
// Styling
import './App.css'
// Components
import Welcome from './Pages/Welcome/Welcome';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import UserBar from './Components/UserBar/UserBar';
import Profile from './Pages/Profile/Profile';
import Main from './Pages/Main/Main';
import TravelYou from './Pages/TravelYou/TravelYou';
import TravelMe from './Pages/TravelMe/TravelMe';


function App() {

  const [{ user }, dispatch] = useStateValue();

  const location = useLocation();
  let testVar = '';

  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

  }, [])


    // redirect if user is logged in
    useEffect(() => {
      if ( user ) {
        history.push('/main');
      }
    }, [user])



  return (
    <div className="app">
      <UserBar location={location} />
      <Switch>

        <Route path='/' exact>
          <Welcome />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>

        <Route path='/profile'>
          <Profile />
        </Route>

        <Route path='/main'>
          <Main />
        </Route>

        <Route path='/travelyou'>
          <TravelYou />
        </Route>


        <Route path='/travelme'>
          <TravelMe />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
