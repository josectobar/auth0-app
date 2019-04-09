import React, { Component } from "react"
import { Route, Redirect } from "react-router-dom"
import Home from "./Home/Home"
import Profile from "./Profile/Profile"
import Nav from "./Nav/Nav"
import "./App.css"
import Auth from "./Auth/Auth"
import Callback from "./Callback/Callback"

class App extends Component {
  constructor(props) {
    super(props)
    this.auth = new Auth(this.props.history)
  }
  render() {
    return (
      <>
        <Nav auth={this.auth} />
        <Route
          path="/"
          exact
          render={props => <Home auth={this.auth} {...props} />}
        />
        <Route
          path="/callback"
          render={props => <Callback auth={this.auth} {...props} />}
        />
        <Route
          path="/profile"
          render={props =>
            this.auth.isAuthenticated() ? (
              <Profile auth={this.auth} {...props} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </>
    )
  }
}

export default App
