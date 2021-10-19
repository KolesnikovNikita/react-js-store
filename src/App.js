import "./App.css";
import Basket from "./Basket";
import Main from "./Main";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Main />
        <Basket />
      </div>
    </div>
  );
}

export default App;
