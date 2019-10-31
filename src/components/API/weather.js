import React from 'react'
import * as _ from 'lodash'
import * as APIService from '../../services'
import { connect } from 'react-redux'

class Weather extends React.Component {
    constructor() {
        super();
        // this.APIService = this.props.APIService.bind(this)
        this.state = { weather: { weather: [{ description: '' }] } }
    }

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({ weather: await APIService.weatherAPI() });
        this.props.weather(this.state.weather);
    };

    calculation = () => {

    }

    onChange = (event) => {
        this.setState({ array: event.target.value })
    }

    render() {
        return (
            <div>
                <h2>WEATHER = {this.state.weather.weather[0].description}</h2>
                <form className="App" onSubmit={this.onSubmit}>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    weather: (data) => { dispatch({ index: data, type: 'weather' }) }
});

export default connect(null, mapDispatchToProps)(Weather)
