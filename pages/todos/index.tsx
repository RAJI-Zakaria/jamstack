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
               <Col>
                   <h1>Todos</h1>  <br/>
                   <Input
                       value={todoTitle}
                       onChange={(event) => setTodoTitle(event.target.value)}
                       clearable
                       bordered
                       labelPlaceholder="Name"
                   />
                   <br/>  <br/>
                   <Button onClick={handleAddTodo}>Add Todo</Button>
               </Col>
            </Row>

            <Row justify="center" align="center">
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            {todo.title} ===|||||=== <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </Row>
        </Container>
    );
};

export default IndexPage;
