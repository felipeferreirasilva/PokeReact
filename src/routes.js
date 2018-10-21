import React from 'react'
import Home from './template/home'
import About from './template/about'
import { Route } from "react-router-dom";

const routes = props => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </div>
    )
}

export default routes