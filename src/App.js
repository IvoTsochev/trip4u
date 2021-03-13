// Utils
import { Route, Switch } from 'react-router-dom'
// Styling
import './App.css'
// Components
import Welcome from './Pages/Welcome/Welcome'


function App() {
  return (
    <div className="app">
      <Switch>
        <Route path='/' exact>
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
