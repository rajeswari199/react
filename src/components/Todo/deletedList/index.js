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
                    this.props.items.map((item, index) => {
                        return (
                            item.isDeleted ?
                                <div key={'key'+ index}>
                                    <li>{item.value}</li>
                                    <button id={index} onClick={this.delete}>undo</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(DeletedList);