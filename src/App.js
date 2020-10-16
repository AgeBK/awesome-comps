import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ComputerContext } from "./context/";
import Home from "./components/home";
import Categories from "./components/categories";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" render={() => <Home />}></Route>
        <Route exact path="/:id" render={() => <Categories />}></Route> */}
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/:id" component={Categories}></Route>
      </Switch>
    </Router>
  );
}

export default App;
