import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/modules/todos';

function Forms() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => {
        return state.todos;
    });

    const [todo, setTodo] = useState({
        id: todos.length - 1,
        title: '',
        body: '',
        isDone: false,
    });
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onTitleHandler = (event) => {
        setTitle(event.target.value);
    };
    const onBodyHandler = (event) => {
        setBody(event.target.value);
    };

    const AddButtonHandler = (event) => {
        event.preventDefault();

        const newTodo = {
            id: todo.id + 1,
            title,
            body,
            isDone: false,
        };

        dispatch(addTodo({ ...newTodo }));
        setTodo(newTodo);
    };

    return (
        <>
            <form>
                제목 <input type="text" onChange={onTitleHandler} value={title}></input>
                내용 <input type="text" onChange={onBodyHandler} value={body}></input>
                <button onClick={AddButtonHandler}>추가하기</button>
            </form>
        </>
    );
}

export default Forms;
