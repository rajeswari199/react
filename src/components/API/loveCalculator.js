import React from 'react'
import * as _ from 'lodash'
import APIService from '../../services'

class LoveCalculator extends React.Component {
    constructor() {
        super();
        this.state = { compatiblity: { percentage: 0, result: '' }, fname: '', sname: '' }
    }

    onSubmit = async (event) => {
        event.preventDefault();
        const response = await APIService.calculator(this.state.fname, this.state.sname);
        this.setState({ compatiblity: await response.json() });
    };

    onChange = (event) => {
        console.log(event.target)
        event.target.id === 'fname' ?
            this.setState({ fname: event.target.value })
            : this.setState({ sname: event.target.value })
    }

    render() {
        return (
            <div>
                <h2>COMPATIBILITY = {this.state.compatiblity.percentage}% {this.state.compatiblity.result}</h2>
                <form className="App" onSubmit={this.onSubmit}>
                    <input id='fname' value={this.state.fname} onChange={this.onChange} />
                    <input id='sname' value={this.state.sname} onChange={this.onChange} />
                    <button>Submit</button>
                </form>
            </div >
        )
    }
}

export default LoveCalculator
