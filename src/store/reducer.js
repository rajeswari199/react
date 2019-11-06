import { combineReducers } from "redux";

const List = (state = [], action) => {
    switch (action.type) {
        case 'list':
            return [...state, { value: action.items, isDeleted: false, checked: false }];
        case 'check':
            return [...action.index];
        default:
            return [...state];
    }
}

const Calculator = (state = {}, action) => {
    switch (action.type) {
        case 'calculator':
            return { ...action.payload };
        default:
            return { ...state }
    }
}

const Weather = (state = {}, action) => {
    switch (action.type) {
        case 'weather':
            return { ...action.payload };
        default:
            return { ...state }
    }
}

const Train = (state = [{ train_num: '', name: '' }], action) => {
    switch (action.type) {
        case 'train':
            return [...action.payload];
        default:
            return [...state]
    }
}

export default combineReducers({ List, Calculator, Weather, Train })
