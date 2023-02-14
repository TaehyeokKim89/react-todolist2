import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodo, editTodo } from '../redux/modules/todos';

function List() {
    const dispatch = useDispatch();

    const todos = useSelector((state) => {
        return state.todos;
    });

    const deleteButtonHandler = (id) => {
        const filterdTodo = todos.filter((x) => id !== x.id);
        dispatch(deleteTodo(filterdTodo));
    };

    const editButtonHandler = (id) => {
        const editedTodo = todos.map((x) => {
            if (x.id === id) {
                return {
                    ...x,
                    isDone: !x.isDone,
                };
            } else {
                return { ...x };
            }
        });
        dispatch(editTodo(editedTodo));
    };
    return (
        <>
            <div>
                {todos.map((item) => {
                    if (item.isDone) {
                        return (
                            <div key={item.id}>
                                <Link to={`/detail/${item.id}`}>상세페이지</Link>
                                <div>
                                    <h2>{item.title}</h2>
                                    <h3>{item.body}</h3>
                                </div>
                                <div>
                                    <button onClick={() => deleteButtonHandler(item.id)}>
                                        삭제
                                    </button>
                                    <button onClick={() => editButtonHandler(item.id)}>
                                        {item.isDone ? '취소' : '완료'}
                                    </button>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
            <div>
                {todos.map((item) => {
                    if (!item.isDone) {
                        return (
                            <div key={item.id}>
                                <Link to={`/detail/${item.id}`}>상세페이지</Link>
                                <div>
                                    <h2>{item.title}</h2>
                                    <h3>{item.body}</h3>
                                </div>
                                <div>
                                    <button onClick={() => deleteButtonHandler(item.id)}>
                                        삭제
                                    </button>
                                    <button onClick={() => editButtonHandler(item.id)}>
                                        {item.isDone ? '취소' : '완료'}
                                    </button>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </>
    );
}

export default List;
