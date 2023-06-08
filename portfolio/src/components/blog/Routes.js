import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Blog1 from './Blog1(Introduction To Flutter)/Blog1'

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/blog1" component={Blog1} />
                </Switch>
            </Router>
        )
    }
}