import React from 'react'
import TodoForm from './todoForm'
import TodoList from './todoList'
import CompletedList from './completedList'
import DeletedList from './deletedList'

class Todo extends React.Component {
    render() {
        return (
            <div>
                <h3 className="mb-3">Capital Structure</h3>
                <div>
                    < TodoForm />
                </div>
                <div>
                    <h1>TODO LIST</h1>
                    <TodoList />
                </div>
                <div>
                    <h1>COMPLETED LIST</h1>
                    <CompletedList />
                </div>
                <div>
                    <h1>DELETED LIST</h1>
                    <DeletedList />
                </div>
            </div>
        )
    }
}

export default Todo
