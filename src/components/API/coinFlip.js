import React from 'react'
import * as APIService from '../../services'

class CoinFlip extends React.Component {
    constructor() {
        super();
        this.state = { coin: '' }
    }

    onClick = async (event) => {
        event.preventDefault();
        this.setState({ coin: await APIService.coinFlip() });
    };

    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.coin && <h2>COIN = {this.state.coin.outcome}</h2>}
                <button onClick={this.onClick}>Toss</button>
            </div >
        )
    }
}

export default CoinFlip
