import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { StButton } from '../components/Forms';

function Detail() {
    const params = useParams();
    const navigate = useNavigate();

    const todos = useSelector((state) => {
        return state.todos;
    });

    const foundTodo = todos.find((item) => {
        return item.id === parseInt(params.id);
    });

    return (
        <>
            <StDetailTodo>
                <StDetailHeader>
                    <div>
                        <h3>ID : {foundTodo.id}</h3>
                    </div>
                    <StButton
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        HOME
                    </StButton>
                </StDetailHeader>

                <div>
                    <h2>{foundTodo.title}</h2>
                    <h3>{foundTodo.body}</h3>
                </div>
            </StDetailTodo>
        </>
    );
}

export default Detail;

const StDetailTodo = styled.div`
    width: 500px;
    height: 400px;
    border: 3px solid #bcbc99;
    padding: 20px;
    margin: auto;
    margin-top: 100px;
    box-shadow: 3px 3px 3px;
`;

const StDetailHeader = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    height: 100px;
`;
