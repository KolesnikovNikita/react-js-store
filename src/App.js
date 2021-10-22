import "./App.css";
import Basket from "./Basket";
import Card from './Card';
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Card</Link>
            </li>
            <li>
              <Link to="/me">Main</Link>
            </li>
            <li>
              <Link to="/basket">Basket</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/me">
            <Header />
          </Route>
          <Route exact path="/basket">
            <Basket />
          </Route>
          <Route exact path="/">
            <Card />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
