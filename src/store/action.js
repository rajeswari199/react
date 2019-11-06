import { actions } from '../store/actionTypes';
import store from '../store'

const CALCULATOR = (data) => {
    return store.dispatch({ payload: data, type: actions.CALCULATOR });
}

export default CALCULATOR;