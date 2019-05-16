import { createStore } from 'redux';
import rootReducer from './reducers';

const state = {
    words: [
        { id: 1, word: 'gavno', translation: 'something nice', img: 'src'},
        { id: 2, word: 'energy', translation: 'physics pozacnennza', img: 'some2@e-mail.com'},
        { id: 3, word: 'apple', translation: 'lalala', img: 'some3@e-mail.com'},
        { id: 4, word: 'sun', translation: 'gafafafa', img: 'some4@e-mail.com'}
    ]
};

const store = createStore(rootReducer, state);

export default store;
