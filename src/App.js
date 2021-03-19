// Utils
import { Route, Switch } from 'react-router-dom';
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
import Main from './Pages/Main/Main'


function App() {

  const [{ user }, dispatch] = useStateValue();


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>> ", authUser);

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



  return (
    <div className="app">
      <UserBar />
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

      </Switch>
    </div>
  );
}

export default App;
