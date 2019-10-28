import React from 'react';
import { connect } from 'react-redux'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
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
    this.props.list([...this.state.items, this.state.term])
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  list: (data) => { dispatch({ items: data, type: 'list' }) }
})


export default connect(null, mapDispatchToProps)(TodoForm)