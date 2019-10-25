import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Todo from '../components/Todo'

const RouteApp = () => (
    <Switch>
        <Route exact path="/" render={() => (<Redirect to="/todo" />)} />
        <Route key="/todo" exact path="/todo" component={Todo} />
    </Switch>
)

export default RouteApp
