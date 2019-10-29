import React from 'react';
import { connect } from 'react-redux'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.list(this.state.term);
    this.setState({
      term: ''
    });
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