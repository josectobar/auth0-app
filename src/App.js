import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home/Home'
import Profile from './Profile/Profile'
import Nav from './Nav/Nav'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
       <Nav/>
       <Route path='/' exact component={Home} />
       <Route path='/profile' exact component={Profile} />
      </>
    );
  }
}

export default App;
