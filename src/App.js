import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Nav from './template/nav'
import Router from './router/router'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Router />
      </div>
    )
  }
}

export default App;
