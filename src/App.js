import { Route, Switch } from "react-router";
import "./App.css";
import ListDrinks from "./Components/ListDrinks";
import Nav from "./Components/Nav";
import Casamento from "./Pages/Casamento";
import Confraternizacao from "./Pages/Confraternizacao";
import Formatura from "./Pages/Formatira";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Nav />
        <div className="App">
          <h2 className="Title-First">Beers</h2>
          <ListDrinks />
        </div>
      </Route>
      <Route path="/Casamento">
        <Nav />
        <Casamento />
      </Route>
      <Route path="/Confraternizacao">
        <Nav />
        <Confraternizacao />
      </Route>
      <Route path="/Formatura">
        <Nav />
        <Formatura />
      </Route>
    </Switch>
  );
}

export default App;
