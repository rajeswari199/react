import React from 'react';
import TodoList  from '../todoList';

export default class TodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        term: '',
        items: ['yes']
      };
    }
  
    onChange = (event) => {
      this.setState({ term: event.target.value });
    }
  
    onSubmit = (event) => {
      event.preventDefault();
      this.setState({
        term: '',
        items: [...this.state.items, this.state.term]
      });
    }
  
    render() {
      return (
        <div>
          <form className="App" onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Submit</button>
          </form>
          <TodoList items={this.state.items} />
        </div>
      );
    }
  }