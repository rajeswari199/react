import { createStore } from 'redux';

export const List = (state = [], action) => {
    switch (action.type) {
        case 'list':
            return action.items;
        default:
            return state;
    }
}

let store = createStore(List);

export default store;