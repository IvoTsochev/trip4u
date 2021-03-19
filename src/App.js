// Utils
import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
// Styling
import './App.css'
// Components
import Welcome from './Pages/Welcome/Welcome';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { auth } from './firebase';
import UserBar from './Components/UserBar/UserBar';


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
      <UserBar user={user} />
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

      </Switch>
    </div>
  );
}

export default App;
