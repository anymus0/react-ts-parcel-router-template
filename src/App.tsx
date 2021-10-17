import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import About from "./pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const AppRouter = (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );

  return (
    <div>
      {AppRouter}
    </div>
  );
}

export default App;
