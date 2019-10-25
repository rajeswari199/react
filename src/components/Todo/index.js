import React from 'react'
import TodoForm from './todoForm'

class Todo extends React.Component {
    render() {
        return (
            <div>
                <h3 className="mb-3">Capital Structure</h3>
                <div>
                    < TodoForm />
                </div>
            </div>
        )
    }
}

export default Todo
