const todosIntialState = [];

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id,
    };
};

export const editTodo = (id) => {
    return {
        type: EDIT_TODO,
        id,
    };
};

const todos = (state = todosIntialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return (state = [...state, { ...action.payload }]);
        case DELETE_TODO:
            return state.filter((x) => x.id !== action.id);
        case EDIT_TODO:
            return state.map((x) => {
                if (x.id === action.id) {
                    return { ...x, isDone: !x.isDone };
                } else {
                    return { ...x };
                }
            });
        default:
            return state;
    }
};
export default todos;
