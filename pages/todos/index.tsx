import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Container, Row, Card, Col, Input, Button } from '@nextui-org/react';
import React, { useState } from "react";

type Todo = {
    title: string;
};

const IndexPage = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [todoTitle, setTodoTitle] = useState("");

    const handleAddTodo = () => {
        if (todoTitle.trim() !== "") {
            setTodos((prevTodos) => [...prevTodos, { title: todoTitle }]);

            setTodoTitle("");
        }else{
            alert("the input should not be empty")
        }
    };

    const handleDeleteTodo = (index: number) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    };

    return (
        <Container>
            <Row justify="center" align="center">
                <Col span={6} justify="center" align="center">
                    <h1
                        style={{ marginBottom: '10px' }} // Add margin bottom to the Input
                    >Todos</h1>
                    <Input
                        value={todoTitle}
                        onChange={(event) => setTodoTitle(event.target.value)}
                        clearable
                        bordered
                        labelPlaceholder="Name"
                        fullWidth // Add this prop to make the Input stretch
                    />
                    <Button       style={{ marginTop: '10px', marginBottom: '40px' }} // Add margin bottom to the Input
                                  onClick={handleAddTodo}>Add Todo</Button>
                </Col>
            </Row>

            <Row justify="center" align="center">
               <Col span={5}>
                   <ul className="todo-list">
                       {todos.map((todo, index) => (
                           <li key={index} className="todo-item">
                               {todo.title} <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                           </li>
                       ))}
                   </ul>
               </Col>
            </Row>

        </Container>
    );
};

export default IndexPage;
