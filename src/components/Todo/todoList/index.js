import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }
  static getDerivedStateFromProps(props, state) {
    return {
      items: [...props.items],
    };
  }
  handleCheckClick = (event) => {
    this.setState({
      items: this.state.items.map((item, index) =>
        (index == event.target.id) ? item['checked'] = !item.checked : item
      )
    }, () => {
      this.props.check(this.state.items)
    });
  }
  delete = (event) => {
    this.setState({
      items: this.state.items.map((item, index) =>
        (index == event.target.id) ? item['isDeleted'] = !item.isDeleted : item
      )
    }, () => {
      this.props.check(this.state.items)
    });
  }
  render() {
    return (
      <ul>
        {
          this.state.items.map((item, index) =>
              !item.isDeleted ? <div key={'s' + index}>
                <input type="checkbox" onChange={this.handleCheckClick} checked={item.checked} id={index} className="filled-in" />
                <li>{item.value}</li>
                <button id={index} onClick={this.delete}>remove</button>
              </div> : null  
          )
        }
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  items: state.List
});

const mapDispatchToProps = (dispatch) => ({
  check: (data) => { dispatch({ index: data, type: 'check' }) }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);