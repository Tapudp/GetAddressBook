import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Default from "./pages/default";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
        <Route component={Default} />
      </Switch>
    </div>
  );
}

export default App;
