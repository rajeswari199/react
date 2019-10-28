import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Todo from '../components/Todo'
import Links from '../components/Links'

const RouteApp = () => (
    <Switch>
        <Route exact path="/" render={() => (<Redirect to="/links" />)} />
        <Route exact path="/todo" component={Todo} />
        <Route  exact path="/links" component={Links} />
    </Switch>
)

export default RouteApp
