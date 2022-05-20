import './App.css';
import Home from './components/Home';
import ShowInfo from './components/ShowInfo';
import {Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <h2>Routing</h2>

        <p>
            <Link to="/home">Home</Link> |
          
          | <Link to="/3">Show Info</Link>
        </p>


        <Switch>

          <Route exact path="/:id/:textColor/:backColor">
            <ShowInfo/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/:id">
            <ShowInfo/>
          </Route>



        </Switch>
    </div>
  );
}

export default App;
