import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  Who, Request
} from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/who" exact component={() => <Who />} />
          <Route path="/request" exact component={() => <Request />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
