import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import nextId from 'react-id-generator';
import styled from 'styled-components';

function Forms() {
    const dispatch = useDispatch();
    const idRef = useRef('');
    const pwRef = useRef('');
    useEffect(() => {
        idRef.current.focus();
    }, []);

    const randomId = nextId();
    const newId = parseInt(randomId.replace(/[^0-9]/g, ''));

    const [todo, setTodo] = useState({
        id: newId,
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
        if (idRef.current.value === '' || pwRef.current.value === '') {
            return false;
        }

        const newTodo = {
            id: todo.id + 1,
            title,
            body,
            isDone: false,
        };

        dispatch(addTodo({ ...newTodo }));
        setTodo(newTodo);
        setTitle('');
        setBody('');
    };

    return (
        <>
            <StHeader>
                <div>My To Do List</div>
                <div>React</div>
            </StHeader>
            <Stform>
                <div>
                    <StLabel>
                        {' '}
                        제목{' '}
                        <StInput
                            required="required"
                            placeholder="할 일을 입력해주세요"
                            type="text"
                            onChange={onTitleHandler}
                            value={title}
                            ref={idRef}
                        ></StInput>
                    </StLabel>
                    <StLabel>
                        내용{' '}
                        <StInput
                            required="required"
                            placeholder="할 일을 자세히 입력해주세요"
                            type="text"
                            onChange={onBodyHandler}
                            value={body}
                            ref={pwRef}
                        ></StInput>
                    </StLabel>
                </div>

                <StButton backgroundcolor="#bcbc99" onClick={AddButtonHandler}>
                    ➕
                </StButton>
            </Stform>
        </>
    );
}

export default Forms;

const Stform = styled.form`
    max-width: 1160px;
    min-width: 680px;
    height: 55px;
    /* background-color: powderblue; */
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
    width: 100px;
    height: 30px;
    margin-right: 10px;
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
