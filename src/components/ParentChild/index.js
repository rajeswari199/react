import React from 'react'
import { GetWrappedChild } from './child';

class Parent extends React.Component {

    render() {
        return (
            <div>
                <GetWrappedChild>
                    <div>
                        <button id='button 1' name='button'>
                            <span>
                                button 1
                            </span>
                        </button>
                        <div>
                            <button id='button 2'>
                                button 2
                            </button>
                            <p>this is paragraph</p>
                            <h1>
                                <span>hello</span>
                            </h1>
                        </div>
                        <button style={{ background: 'green' }} id='button 3'>
                            <span>hello 1</span>
                            <h1>
                                <span>hello 2</span>
                            </h1>
                            <span>hello 3</span>
                        </button>
                        <span>hello 4</span>
                    </div>
                </GetWrappedChild>
            </div>
        )
    }
}


export default Parent
