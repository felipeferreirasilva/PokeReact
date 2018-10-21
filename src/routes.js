import React from 'react'
import Pokemon from './template/pokemon'
import About from './template/about'
import { Route } from "react-router-dom";

const routes = props => {
    return (
        <div>
            <Route exact path="/" component={Pokemon} />
            <Route path="/about" component={About} />
        </div>
    )
}

export default routes