import React from 'react'
import Home from '../template/home'
import About from '../template/about'
import { BrowserRouter, Route } from "react-router-dom";

const routes = props => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </BrowserRouter>
    )
}

export default routes