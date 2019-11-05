// import { createStore } from 'redux';

// export const List = (state = [], action) => {
//     switch (action.type) {
//         case 'list':
//             return [...state, { value: action.items, isDeleted: false, checked: false }];
//         case 'check':
//             return [...action.index];
//         case 'weather':
//             return { ...action.index }
//         default:
//             return state;
//     }
// }

// let store = createStore(List);

// export default store;

import { createStore, compose, applyMiddleware } from 'redux';
import { List } from './store/reducer';
import thunk from 'redux-thunk';

const store = createStore(
    List,
    {}, // default state of the application
    compose(
        applyMiddleware(thunk)
    )
);

export default store;