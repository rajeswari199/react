import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Todo from '../components/Todo'
import Links from '../components/Links'
import WaterTank from '../components/WaterTank'
import Weather from '../components/API/weather'
import LoveCalculator from '../components/API/loveCalculator'
import train from '../components/API/train'
import coin from '../components/API/coinFlip'
import mice from '../components/Mice'
import NQueen from '../components/N-Queen'
import ParentChild from '../components/ParentChild'
import FileUpload from '../components/FileUpload'
import Hooks from '../components/Hooks'

const RouteApp = () => (
    <Switch>
        <Route exact path="/" render={() => (<Redirect to="/links" />)} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/links" component={Links} />
        <Route exact path="/waterTank" component={WaterTank} />
        <Route exact path="/API/weather" component={Weather} />
        <Route exact path="/API/calculator" component={LoveCalculator} />
        <Route exact path="/API/train" component={train} />
        <Route exact path="/API/coin" component={coin} />
        <Route exact path="/mice" component={mice} />
        <Route exact path="/n-queen" component={NQueen} />
        <Route exact path="/parent-child" component={ParentChild} />
        <Route exact path="/file-upload" component={FileUpload} />
        <Route exact path="/hooks" component={Hooks} />
    </Switch>
)

export default RouteApp
