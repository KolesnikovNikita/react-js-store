import User from "./User";
import Main from "./Main";
import Basket from "./Basket";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/">MainPage</Link>
        </li>
        <li>
          <Link to="/basket">Basket</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/user">
          <User />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/basket">
          <Basket />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
