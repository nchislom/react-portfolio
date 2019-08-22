import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Portfolio />
        {/* <Switch>
          <Route path = "/portfolio" component = { Portfolio } />
        </Switch> */}
      </div>
    );
  }
}

export default App;
