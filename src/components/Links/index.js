import React from 'react'
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

class Links extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/todo">TODO</Link>
                        </li>
                        <li>
                            <Link to="/waterTank">WATER TANK PROBLEM</Link>
                        </li>
                        <ul>
                            <li>
                                <Link to="/API/weather">WEATHER API</Link>
                            </li>
                            <li>
                                <Link to="/API/calculator">CALCULATOR API</Link>
                            </li>
                            <li>
                                <Link to="/API/train">TRAIN API</Link>
                            </li>
                            <li>
                                <Link to="/API/coin">COIN API</Link>
                            </li>
                            <li>
                                <Link to="/mice">MICE PROBLEM</Link>
                            </li>
                            <li>
                                <Link to="/n-queen">N-QUEEN PROBLEM</Link>
                            </li>
                            <li>
                                <Link to="/parent-child">PARENT CHILD</Link>
                            </li>
                            <li>
                                <Link to="/file-upload">FILE UPLOAD</Link>
                            </li>
                            <li>
                                <Link to="/hooks">HOOKS</Link>
                            </li>
                        </ul>
                    </ul>
                </header>
            </div>
        )
    }
}

export default Links
