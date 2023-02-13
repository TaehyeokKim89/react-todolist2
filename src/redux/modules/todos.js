const todosIntialState = [
    {
        id: 0, // id는 모두 고유값이어야 합니다.
        title: '리액트 강의보기',
        body: '챕터 1부터 챕터 12까지 학습',
        isDone: false,
    },
];

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const TOGGLESTATUSTODO = 'TOGGLESTATUSTODO';

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

export const toggleStatusTodo = (payload) => {
    console.log('payload', payload);
    return {
        type: TOGGLESTATUSTODO,
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
        case TOGGLESTATUSTODO:
            return (state = action.payload);

        default:
            return state;
    }
};
export default todos;
