import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Nav from "./Nav/Nav";
import "./App.css";
import Auth from "./Auth/Auth";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <Nav />
        <Route
          path="/"
          exact
          render={props => <Home auth={this.auth} {...props} />}
        />
        <Route path="/profile" exact component={Profile} />
      </>
    );
  }
}

export default App;
