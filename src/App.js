import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Modal from "./components/Modal";
import Default from "./pages/default";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/modal" component={Modal} />
        <Route component={Default} />
      </Switch>
    </div>
  );
}

export default App;
