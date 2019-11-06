import React from 'react'
import { calculator } from '../../services'
import { connect } from 'react-redux'

class LoveCalculator extends React.Component {
    constructor() {
        super();
        this.state = { fname: '', sname: '' }
    }

    onSubmit = async (event) => {
        event.preventDefault();
        await calculator(this.state.fname, this.state.sname);
    };

    onChange = (event) => {
        event.target.id === 'fname' ?
            this.setState({ fname: event.target.value })
            : this.setState({ sname: event.target.value })
    }

    render() {
        return (
            <div>
                {this.props.compatiblity && <h2>COMPATIBILITY = {this.props.compatiblity.percentage}% {this.props.compatiblity.result}</h2>}
                <form className="App" onSubmit={this.onSubmit}>
                    <input id='fname' value={this.state.fname} onChange={this.onChange} />
                    <input id='sname' value={this.state.sname} onChange={this.onChange} />
                    <button>Submit</button>
                </form>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    compatiblity: state.Calculator
})

export default connect(mapStateToProps)(LoveCalculator)
