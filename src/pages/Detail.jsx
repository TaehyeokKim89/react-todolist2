import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toggleStatusTodo } from '../redux/modules/todos';

function Detail() {
    const params = useParams();
    const dispatch = useDispatch();

    const todos = useSelector((state) => {
        return state.todos;
    });

    const foundTodo = todos.find((item) => {
        return item.id === parseInt(params.id);
    });

    dispatch(toggleStatusTodo(todos));

    return (
        <div>
            <h5>{foundTodo.id}</h5>
            <h2>{foundTodo.title}</h2>
            <h3>{foundTodo.body}</h3>
        </div>
    );
}

export default Detail;
