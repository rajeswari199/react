import React from 'react'
import * as _ from 'lodash'


class Mice extends React.Component {
  constructor() {
    super();
    this.state = {
      path: [], array: [
        [1, 1, 1, 1],
        [0, 1, 1, 0],
        [0, 1, 1, 1]
      ]
    }
  }

  onClick = (event) => {
    event.preventDefault();
    const arr = this.state.array
    const path = this.state.array[arr.length - 1][arr[0].length - 1] !== 0 && arr[0][0] !== 0 ?
      this.calculate([{ i: 0, j: 0 }], 0, 0, [])
      : this.setState({ path: 'not reachable' })
  };

  /**
   * return false 
   * if i or j value exceeds the array length (to omit out of bound index) 
   * index has false value i.e 0
   * if the index is found in omit array
   */
  omitFunction = (i, j, omit) =>
    i !== this.state.array.length
    && j !== this.state.array[0].length
    && this.state.array[i][j]
    && _.findIndex(omit, { i: i, j: j }) === -1

  calculate(path, i, j, omit) {
    const arr = this.state.array;
    let pushObj = {}
    /**
     * assign pushObject with immediate right indices (i,j+1) if its value is 1 
     * else with immediate below indices (i+1,j) if its value is 1
     * else with empty object if either ways are closed i.e, 0
     */
    pushObj = this.omitFunction(i, j + 1, omit)
      ? { i: i, j: j + 1 }
      : this.omitFunction(i + 1, j, omit)
        ? { i: i + 1, j: j }
        : {}
    if (!_.isEmpty(pushObj)) {
      path.push(pushObj)
    } else {
      /**
       * backtrack by popping out the recently pushed value if pushObject is empty
       * this is because the path becomes unreachable so go with other option
       */
      path.pop()
      if (!path.length) {
        /**
         * array does not have any reachable path, if initial value (0,0) is popped out 
         * and 'path' becomes an empty array.
         */
        this.setState({ path: 'not reachable' })
        return
      }
      /**
       * assign pushObject with the last value of 'path', to calculate the alternate path.
       * push current location to 'omit' array, to avoid going to same location again.
       */
      pushObj = { ...path[path.length - 1] }
      omit.push({ i: i, j: j })
    }
    /**
     * setstate if the destination is reached.
     */
    if (pushObj.i === arr.length - 1 && pushObj.j === arr[0].length - 1) {
      this.setState({
        path: path
      })
      return [...path]
    }
    this.calculate(path, pushObj.i, pushObj.j, omit)
  }

  render() {
    return (
      <div>
        {this.state.path && <h2>path = {JSON.stringify(this.state.path)}</h2>}
        {<table>
          <tbody>
            {_.map(this.state.array, (arr, arrIndex) => <tr key={arrIndex}>
              {_.map(arr, (val, index) => <td key={arrIndex + '-' + index}><h4>{val}</h4></td>)}
            </tr>)}
          </tbody>
        </table>}
        <button onClick={this.onClick}>Find Path</button>
      </div >
    )
  }
}

export default Mice
