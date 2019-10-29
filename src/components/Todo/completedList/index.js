import React from 'react';
import { connect } from 'react-redux';

const CompletedList = (props) => {
    return (
        <ul>
            {
                props.items.map((item, index) => {
                    return (
                        item.checked && !item.isDeleted ? <li key={index}>{item.value}</li> : null
                    )
                }
                )
            }
        </ul>
    );
  }

const mapStateToProps = state => ({
    items: state
});

export default connect(mapStateToProps)(CompletedList);