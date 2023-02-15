import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useInput } from '../hooks/Inputs';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import nextId from 'react-id-generator';

function Forms() {
    const dispatch = useDispatch();

    const idRef = useRef('');
    const pwRef = useRef('');
    useEffect(() => {
        idRef.current.focus();
    }, []);
    const [inputTitle, onChangeTitle, setInputTitle] = useInput('');
    const [inputBody, onChangeBody, setInputBody] = useInput('');

    const randomId = nextId();
    const newId = parseInt(randomId.replace(/[^0-9]/g, ''));

    const [todo, setTodo] = useState({
        id: newId,
        title: '',
        body: '',
        isDone: false,
    });

    const AddButtonHandler = (event) => {
        event.preventDefault();
        if (inputTitle.trim() === '' || inputBody.trim() === '') return;

        const newTodo = {
            id: todo.id + 1,
            title: inputTitle,
            body: inputBody,
            isDone: false,
        };
        dispatch(addTodo({ ...newTodo }));
        setTodo(newTodo);
        setInputTitle('');
        setInputBody('');
    };

    return (
        <>
            <StHeader>
                <div>My To Do List</div>
                <div>React</div>
            </StHeader>
            <Stform onSubmit={AddButtonHandler}>
                <div>
                    <StLabel>
                        {' '}
                        제목{' '}
                        <StInput
                            required="required"
                            placeholder="할 일을 입력해주세요"
                            type="text"
                            onChange={onChangeTitle}
                            value={inputTitle}
                            ref={idRef}
                        ></StInput>
                    </StLabel>
                    <StLabel>
                        내용{' '}
                        <StInput
                            required="required"
                            placeholder="할 일을 자세히 입력해주세요"
                            type="text"
                            onChange={onChangeBody}
                            value={inputBody}
                            ref={pwRef}
                        ></StInput>
                    </StLabel>
                </div>
                <StButton>➕</StButton>
            </Stform>
        </>
    );
}

export default Forms;

const Stform = styled.form`
    max-width: 1160px;
    min-width: 680px;
    height: 55px;
    border: 5px solid #bcbc99;
    border-radius: 10px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 15px;
`;

export const StButton = styled.button`
    width: 90px;
    height: 30px;
    margin-right: 15px;
    border-radius: 5px;
    border: 1px solid transparent;
    font-size: 20px;
    background-color: #bcbc99;
    box-shadow: 3px 3px 3px;
    cursor: pointer;
`;

const StInput = styled.input`
    width: 200px;
    height: 30px;
    margin-right: 20px;
    border-radius: 5px;
    border: 3px solid #bcbc99;
    box-shadow: 2px 2px 2px;
    padding: 5px;
    outline: none;
`;

const StLabel = styled.label`
    font-size: 20px;
`;

const StHeader = styled.div`
    max-width: 1160px;
    min-width: 680px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 15px;
`;
