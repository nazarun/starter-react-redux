import words from './word';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    words: words
});

export default rootReducer