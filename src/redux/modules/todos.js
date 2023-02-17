import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';

const todosInitialState = [{ id: 0, title: '', body: '', isDone: false }];

const todosSlice = createSlice({
    name: 'todos',
    initialState: todosInitialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },

        deleteTodo: (state, action) => {
            return state.filter((x) => x.id !== action.payload);
        },
        editTodo: (state, action) => {
            return state.map((x) => {
                if (x.id === action.payload) {
                    return { ...x, isDone: !x.isDone };
                } else {
                    return { ...x };
                }
            });
        },
    },
});

export default todosSlice.reducer;
export const { addTodo, deleteTodo, editTodo } = todosSlice.actions;
