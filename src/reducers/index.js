import { combineReducers } from 'redux';

import phones from './phones';
import basket from './basket';

export default combineReducers({
    phones,
    basket
});