import React from 'react'
import * as _ from 'lodash'

class WaterTank extends React.Component {
    constructor() {
        super();
        this.state = { array: '' }
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            alterArray: this.state.array.split(',').map(Number)
        }, () => this.calculation())
    };

    calculation = () => {
        const arrLen = this.state.alterArray.length;
        const arr = [];
        this.state.alterArray.map((blocks, position) => {
            if (position > 0 && position + 1 < arrLen) {
                const start = position > 1 ? _.max(_.slice(this.state.alterArray, 0, position)) : this.state.alterArray[0];
                const stop = _.max(_.slice(this.state.alterArray, position + 1, arrLen));
                const val = _.min([start, stop]) - blocks;
                if (val > 0) { arr.push(val) }
            }
        })
        this.setState({ water: _.sum(arr) })
    }

    onChange = (event) => {
        this.setState({ array: event.target.value })
    }

    render() {
        return (
            <div>
                <h3 className="mb-3">BUILDING BLOCKS PROBLEM</h3>
                <h2>CAPACITY = {this.state.water}l</h2>
                <form className="App" onSubmit={this.onSubmit}>
                    enter block sequence<input value={this.state.array} onChange={this.onChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default WaterTank
