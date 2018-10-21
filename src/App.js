import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Nav from './template/nav'
import Router from './routes'

const App = () => {
  return (
    <div>
      <Nav />
      <Router />
    </div>
  )
}

export default App;
