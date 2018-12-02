import { combineReducers } from 'redux';

import phones from './phones';
import basket from './basket';
import filter from './filter';

export default combineReducers({
    phones,
    basket,
    filter
});