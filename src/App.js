// Utils
import { Route, Switch } from 'react-router-dom'
// Styling
import './App.css'
// Components
import Welcome from './Pages/Welcome/Welcome';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';


function App() {
  return (
    <div className="app">
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
