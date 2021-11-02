import User from "./User";
import Main from "./Main";
import CartContainer from "./CartContainer";
import FavoriteProducts from "./Favorite";
import ProfileEdit from "./ProfileEdit";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import {
  mainPath,
  userPath,
  cartPath,
  favoritePath,
  prifileEditPath,
} from "./helpers/routes";
import ProductPage from "./ProductPage";

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
        <Route exact path={mainPath()} component={Main} />
        <Route exact path={userPath()} component={User} />
        <Route exact path={cartPath()} component={CartContainer} />
        <Route exact path={favoritePath()} component={FavoriteProducts} />
        <Route exact path="/product/:id" component={ProductPage} />
        <Route exact path={prifileEditPath()} component={ProfileEdit} />
      </Switch>
    </Router>
  );
}

export default App;
