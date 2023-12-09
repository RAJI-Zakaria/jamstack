import { Container, Grid, TextField, Button, Typography, Card, CardContent, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const ColorfulButton = styled(Button)({
  borderColor: '#f705',
  color: '#000',
  '&:hover': {
    backgroundColor: '#f705',
  },
  transition: 'background-color 0.3s ease-in-out',
});

type Todo = {
  id: number;
  task: string;
  description: string | null;
  deadline: Date | null;
  user_id: number | null;
};

const IndexPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoTitle, setTodoTitle] = useState('');
  const [userId, setUserId] = useState(1);  

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get<Todo[]>(`/api/todos?user_id=${userId}`);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleAddTodo = async () => {
    if (todoTitle.trim() !== '') {
      try {
        const response = await axios.post<Todo>('/api/todos', { task: todoTitle, user_id: 1 });
        console.log( response.data)
        setTodos([...todos, response.data]);
        setTodoTitle('');
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    } else {
      alert('The input should not be empty');
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await axios.delete(`/api/todos?id=${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

    return (
        <Container maxWidth="xl"  >
            <Grid  width="100%" container direction="column" alignItems="center" spacing={2}>
                <Grid  item>
                    <Typography variant="h4" gutterBottom>
                        Todos for user #1
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
                                        <Typography variant="h6">{todo.task}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <IconButton className='flex items-end' onClick={() => handleDeleteTodo(todo.id)}>
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
