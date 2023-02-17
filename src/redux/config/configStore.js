import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, createStore } from 'redux';
import todos from '../modules/todos';

// const rootReducer = combineReducers({
//     todos,
// });
// const store = createStore(rootReducer);

const store = configureStore({
    reducer: {
        todos,
    },
});

export default store;
