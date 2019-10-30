import React from 'react';
import { connect } from 'react-redux';

class DeletedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }
    static getDerivedStateFromProps(props) {
        return {
            items: [...props.items],
        };
    }
    undo = (event) => {
        this.setState({
            items: this.state.items.map((item, index) =>
                (index == event.target.id) ? item['isDeleted'] = !item.isDeleted : item
            )
        }, () => {
            this.props.check(this.state.items)
        });
    }
    delete = (event) => {
            this.props.check(this.state.items.filter((item, index) =>
            index != event.target.id
        ));
    }
    render() {
        return (
            <ul>
                {
                    this.props.items.map((item, index) => {
                        return (
                            item.isDeleted ?
                                <div key={'key' + index}>
                                    <li>{item.value}</li>
                                    <button id={index} onClick={this.undo}>undo</button>
                                    <button id={index} onClick={this.delete}>delete</button>
                                </div>
                                : null
                        )
                    }
                    )
                }
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    items: state
});

const mapDispatchToProps = (dispatch) => ({
    check: (data) => { dispatch({ index: data, type: 'check' }) }
});

export default connect(mapStateToProps, mapDispatchToProps)(DeletedList);