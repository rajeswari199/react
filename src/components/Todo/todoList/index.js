import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  componentDidMount() {
    console.log(this.props, this.state)
  }
  render() {
    return (
      <ul>
        {
          this.props.items.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  items: state
});

export default connect(mapStateToProps)(TodoList);