import React from 'react'
import * as _ from 'lodash'


class Mice extends React.Component {
    constructor() {
        super();
        this.state = {
            path: [], array: [
                [1, 0, 1, 0],
                [1, 0, 0, 1],
                [1, 1, 1, 1]
            ]
        }
    }

    onClick = (event) => {
        event.preventDefault();
        const path = this.state.array[2][3] !== 0 ? 
        this.calculate([{ i: 0, j: 0 }], 0, 0, [])
        : 'not reachable'
    };

    omitFunction = (i,j,omit) => this.state.array[i][j] && _.findIndex(omit, {i: i,j:j}) === -1

    calculate(path, i, j,omit) {
        const arrLength = this.state.array[0].length;
        let pushObj = this.omitFunction(i,j+1,omit)
            ? { i: i, j: j + 1 }
            : this.omitFunction(i + 1, j, omit)
                ? { i: i + 1, j: j }
                : {}
        if (!_.isEmpty(pushObj)) {
            path.push(pushObj)
        } else {
            path.pop()
            if(!path.length){
                console.log('not reachable')
                return
            }
            pushObj = { ...path[path.length - 1] }
            omit.push({ i: i, j: j })
        }
        if (pushObj.i === this.state.array.length - 1 && pushObj.j === arrLength - 1) {
            console.log(path)
            return [...path]
        }
        this.calculate(path, pushObj.i, pushObj.j,omit)
    }

    render() {
        return (
            <div>
                {this.state.path && <h2>path = {this.state.path}</h2>}
                {this.state.array}
                <button onClick={this.onClick}>Find Path</button>
            </div >
        )
    }
}

export default Mice
