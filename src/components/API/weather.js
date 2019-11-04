import React from 'react'
import * as _ from 'lodash'
import * as APIService from '../../services'
import { connect } from 'react-redux'

class Weather extends React.Component {

    onSubmit = async (event) => {
        event.preventDefault();
        console.log(this.props.weather);
        await APIService.weatherAPI(this.props.weather);
    }

    onChange = (event) => {
        this.setState({ array: event.target.value })
    }

    render() {
        return (
            <div>
                {this.props.apiData.weather && <h2>WEATHER = {this.props.apiData.weather[0].description}</h2>}
                <form className="App" onSubmit={this.onSubmit}>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    apiData: state
})

const mapDispatchToProps = (dispatch) => ({
    weather: (data) => { dispatch({ index: data, type: 'weather' }) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
