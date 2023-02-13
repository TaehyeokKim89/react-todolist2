const todosIntialState = {
    todos: [
        {
            id: 1, // id는 모두 고유값이어야 합니다.
            title: '리액트 강의보기',
            body: '챕터 1부터 챕터 12까지 학습',
            isDone: false,
        },
    ],
};

const ADD_TODO = 'ADD_TODO';

export const addTodo = (payload) => {
    console.log('payload=>', payload);
    return {
        type: ADD_TODO,
        payload,
    };
};

const todos = (state = todosIntialState, action) => {
    console.log('state->', action.payload);
    switch (action.type) {
        case ADD_TODO:
            return [...state.todos, action.payload];
        default:
            return state;
    }
};
export default todos;
