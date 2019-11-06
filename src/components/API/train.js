import React from 'react'
import * as APIService from '../../services'
import { connect } from 'react-redux'

class Train extends React.Component {
    constructor() {
        super();
        this.state = { train: '' }
    }

    onSubmit = async (event) => {
        event.preventDefault();
        this.props.dispatch(await APIService.trainAPI({ name: this.state.train }));
    };

    onChange = (event) => {
        this.setState({ train: event.target.value })
    }

    render() {
        return (
            <div>
                {this.props.train && this.props.train.map((train,index) => { return <h2 key={index}>{train.train_num} TRAIN - {train.name}</h2> })}
                <form className="App" onSubmit={this.onSubmit}>
                    <input id='train' value={this.state.train} onChange={this.onChange} />
                    <button>Submit</button>
                </form>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    train: state.Train
})

const mapDispatchToProps = (dispatch) => ({
    dispatch: (data) => dispatch({ type: 'train', payload: data })
})

export default connect(mapStateToProps, mapDispatchToProps)(Train)
