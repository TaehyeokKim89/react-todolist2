const todosIntialState = [
    {
        id: 0,
        title: '제목',
        body: '내용',
        isDone: false,
    },
];

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    };
};

export const editTodo = (payload) => {
    return {
        type: EDIT_TODO,
        payload,
    };
};

const todos = (state = todosIntialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_TODO:
            return (state = action.payload);
        case EDIT_TODO:
            return (state = action.payload);

        default:
            return state;
    }
};
export default todos;
