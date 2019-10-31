import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Todo from '../components/Todo'
import Links from '../components/Links'
import WaterTank from '../components/WaterTank'
import Weather from '../components/API/weather'
import LoveCalculator from '../components/API/loveCalculator'

const RouteApp = () => (
    <Switch>
        <Route exact path="/" render={() => (<Redirect to="/links" />)} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/links" component={Links} />
        <Route exact path="/waterTank" component={WaterTank} />
        <Route exact path="/API/weather" component={Weather} />
        <Route exact path="/API/calculator" component={LoveCalculator} />
    </Switch>
)

export default RouteApp
