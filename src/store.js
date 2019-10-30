import { createStore } from 'redux';

export const List = (state = [], action) => {
    switch (action.type) {
        case 'list':
            return [...state, { value: action.items, isDeleted: false, checked: false }];
        case 'check':
            return [...action.index];
        default:
            return state;
    }
}

let store = createStore(List);

export default store;