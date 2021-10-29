import User from "./User";
import Main from "./Main";
import CartContainer from "./CartContainer";
import FavoriteProducts from "./Favorite";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const countOfProduct = useSelector((state) => state.cart);
  const countOfFavorite = useSelector((state) => state.favorite);

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
          <Link to="/cart">Cart ({Object.values(countOfProduct).length})</Link>
        </li>
        <li>
          <Link to="/favorite">
            Favorite Products ({Object.values(countOfFavorite).length})
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/user">
          <User />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/cart">
          <CartContainer />
        </Route>
        <Route exact path="/favorite">
          <FavoriteProducts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
