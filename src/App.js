import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home
} from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
