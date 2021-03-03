import React from 'react'
import * as _ from 'lodash'


class NQueen extends React.Component {
	constructor() {
		super();
		this.state = {
			arrLen: 0,
			array: []
		}
	}

	onClick = (event) => {
		event.preventDefault();
		if (parseInt(this.state.arrLen) > 2) {
			// this.setState({
			// 	array: [
			// 		[0, 1, 0],
			// 		[-2, -2, -2],
			// 		[0, 0, 0]
			// 	]
			// }, () => this.calculate(0, []))
			// console.log(this.checkForAvailability(1,[])))
			this.setState(
				{
					array: Array(parseInt(this.state.arrLen)).fill(Array(parseInt(this.state.arrLen)).fill(0))
				}, () => this.calculate(0)
			)
		} else {
			this.setState({
				array: [[1]]
			})
		}
		// this.calculate(0, 1, []);
		// this.populateCells(0,1,-1)
	};

	onChange = (event) => {
		this.setState(
			{
				arrLen: event.target.value,
			}
		)
	}

	populateCells(i, j, value, indexVal) {
		let k = 1;
		const alteredArray = this.state.array.map(
			(arr, x) => arr.map(
				(elem, y) => {
					console.log(i === x - k && j === y + k,i === x + k && j === y - k)
					if (((i === x - k && j === y - k) || (i === x - k && j === y + k) || (i === x + k && j === y - k) || (i === x + k && j === y + k)) && elem !== -1 && elem !== -2) {
						k += 1
						return elem + value
					} else if (y === j && x === i) {
						return indexVal
					} else if ((y === j || x === i)  && elem !== -1 && elem !== -2) {
						return elem + value
					}
					return elem
				}
			)
		)
		this.setState({
			array: alteredArray
		}, () => console.log(alteredArray)
		)
	}

	// checkForAvailability(x, path) {
	// 	const arr = [...this.state.array];
	// 	console.log('avail', arr, x, arr[x])
	// 	let queenPosition;
	// 	const omit = [];
	// 	const a = [];
	// 	for (let y = 0; y < arr[x].length; y++) {
	// 		if (arr[x][y] !== -2) {
	// 			// const queenPosition = path.findIndex((j, i) => {
	// 			// console.log(y !== j, y - diff !== j - diff, y + diff !== j + diff, x === i)
	// 			// return (y !== j) && ((y - (x - i)) !== (j - (x - i))) && ((y + (x - i)) !== (j + (x - i)))
	// 			// }
	// 			// )
	// 			for (let i = 0; i < path.length; i++) {
	// 				const diff = x - i;
	// 				const j = path[i]
	// 				console.log('diff', diff, x, i, y, j)
	// 				console.log(y !== j,y-diff !== j-diff,y+diff !== j+diff, x !== i, !omit.includes(y))
	// 				if ((y !== j) && ((y - diff) !== j) && ((y + diff) !== j) && x !== i && !omit.includes(y) && !path.includes(x)) {
	// 					a.push(y)
	// 					break
	// 				} else {
	// 					omit.push(y)
	// 					continue
	// 				}
	// 			}
	// 			if (a.length) {
	// 				return queenPosition
	// 			}
	// 		}
	// 	}
	// 	return -1
	// }

	// calculate = async (i, path) => {
	// 	if (i < parseInt(this.state.arrLen)) {
	// 		let j;
	// 		// if (i > 0) {
	// 		j = this.checkForAvailability(i, path);
	// 		console.log('pos', j)
	// 		if (j > -1) {
	// 			path.push(j);
	// 			console.log(path)
	// 			await this.calculate(i + 1, path)
	// 		} else {
	// 			// const back = path.length - 1
	// 			await this.backtrack(i - 1, path)
	// 			await this.calculate(i - 1, path)
	// 		}
	// 		// }
	// 	} else {
	// 		console.log('final', path)
	// 	}
	// }

	calculate = async (i) => {
		if(i < this.state.arrLen){
			const alterArray = [...this.state.array];
			const j = alterArray[i].findIndex(val => val === 0)
			if(j > -1){
				await this.populateCells(i,j,1,-1)
				await this.calculate(i+1)
			} else {
				const backTrack = alterArray[i-1].findIndex(val => val === -1)
				await this.populateCells(i,backTrack,-1,-2)
				await this.calculate(i-1)
			}
		} else {
			console.log(this.state.array)
		}
		// if (alterArray[i][j] !== -1) {
		//     this.populateCells(i, j, -1, 1);
		//     this.setState({
		//         array: alterArray
		//     }, () => this.check(i, j))
		// }
	}

	// backtrack = async (i, path) => {
	// 	console.log('backtrack')
	// 	const alterArray = [...this.state.array];
	// 	alterArray[i][path[i]] = -2;
	// 	path.pop()
	// 	this.setState({
	// 		array: alterArray
	// 	})
	// }

	render() {
		return (
			<div>
				<input type='number' value={this.state.arrLen} onChange={this.onChange}></input>
				<button onClick={this.onClick}>Find Path</button>
			</div>
		)
	}
}

export default NQueen
