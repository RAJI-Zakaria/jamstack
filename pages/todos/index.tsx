import { Container, Grid, TextField, Button, Typography, Card, CardContent, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

const ColorfulButton = styled(Button)({
    borderColor: '#f705',
    color: '#000',
    '&:hover': {
        backgroundColor: '#f705',
    },
    transition: 'background-color 0.3s ease-in-out',
});

type Todo = {
    title: string;
};

const IndexPage = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [todoTitle, setTodoTitle] = useState('');

    const handleAddTodo = () => {
        if (todoTitle.trim() !== '') {
            setTodos((prevTodos) => [...prevTodos, { title: todoTitle }]);
            setTodoTitle('');
        } else {
            alert('The input should not be empty');
        }
    };

    const handleDeleteTodo = (index: number) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    };

    return (
        <Container maxWidth="xl"  >
            <Grid  width="100%" container direction="column" alignItems="center" spacing={2}>
                <Grid  item>
                    <Typography variant="h4" gutterBottom>
                        Todos
                    </Typography>
                </Grid>
                <Grid  width="100%" item>
                    <TextField
                        value={todoTitle}
                        onChange={(event) => setTodoTitle(event.target.value)}
                        label="Name"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item>
                    <ColorfulButton variant="contained" onClick={handleAddTodo}>
                        Add Todo
                    </ColorfulButton>
                </Grid>
                <Grid   width="100%" item xs={12} sm={6}>
                    {todos.map((todo, index) => (
                        <Card key={index} variant="outlined" style={{ marginBottom: '8px' }}>
                            <CardContent>
                                <Grid container justifyContent="space-between" alignItems="center">
                                    <Grid item>
                                        <Typography variant="h6">{todo.title}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <IconButton className='flex items-end' onClick={() => handleDeleteTodo(index)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default IndexPage;
