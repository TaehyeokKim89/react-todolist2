import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { deleteTodo, editTodo } from '../redux/modules/todos';
import { StButton } from './Forms';

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
            <StMainContainer>
                <StTodoContainer>
                    <StDivision>To Do List</StDivision>
                    {todos.map((item) => {
                        if (!item.isDone) {
                            return (
                                <div key={item.id}>
                                    <StTodoBox>
                                        <Link to={`/detail/${item.id}`}>상세보기</Link>
                                        <div>
                                            <h2>{item.title}</h2>
                                            <h3>{item.body}</h3>
                                        </div>
                                        <div>
                                            <StButton onClick={() => deleteButtonHandler(item.id)}>
                                                ❌
                                            </StButton>
                                            <StButton onClick={() => editButtonHandler(item.id)}>
                                                {item.isDone ? '➖' : '⭕'}
                                            </StButton>
                                        </div>
                                    </StTodoBox>
                                </div>
                            );
                        }
                    })}
                </StTodoContainer>
                <StTodoContainer>
                    <StDivision>Done List</StDivision>
                    {todos.map((item) => {
                        if (item.isDone) {
                            return (
                                <div key={item.id}>
                                    <StTodoBox>
                                        <Link to={`/detail/${item.id}`}>상세보기</Link>

                                        <div>
                                            <h2>{item.title}</h2>
                                            <h3>{item.body}</h3>
                                        </div>
                                        <div>
                                            <StButton onClick={() => deleteButtonHandler(item.id)}>
                                                ❌
                                            </StButton>
                                            <StButton onClick={() => editButtonHandler(item.id)}>
                                                {item.isDone ? '➖' : '⭕'}
                                            </StButton>
                                        </div>
                                    </StTodoBox>
                                </div>
                            );
                        }
                    })}
                </StTodoContainer>
            </StMainContainer>
        </>
    );
}

export default List;

const StMainContainer = styled.div`
    max-width: 1200px;
    min-width: 500px;
    margin: auto;
    padding: 15px;
    display: flex;
    flex-direction: row;
`;

const StTodoContainer = styled.div`
    border: 5px solid #bcbc99;
    width: 550px;
    min-width: 290px;
    padding: 15px;
    margin-right: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 10px;
`;

const StTodoBox = styled.div`
    border: 3px solid #bcbc99;
    width: 220px;
    min-height: 180px;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px;
`;

const StDivision = styled.div`
    width: 495px;
    background-color: #bcbc99;
    height: 40px;
    padding: 10px;
    font-size: 30px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 3px 3px 3px;
    margin: auto;
`;
