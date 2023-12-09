import { NextApiRequest, NextApiResponse } from 'next';
import Todo from '../../database/models/todo.model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    if (req.query.user_id) {
      return getTodosByUserId(req, res);
    }
    return getTodos(req, res);
  } else if (req.method === 'POST') {
    return createTodo(req, res);
  } else if (req.method === 'DELETE') {
    return deleteTodoById(req, res);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

async function getTodos(req: NextApiRequest, res: NextApiResponse) {
  try {
    const todos = await Todo.findAll<Todo>({ raw: true });
    res.status(200).json(todos);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function createTodo(req: NextApiRequest, res: NextApiResponse) {
  const { task, description, deadline, user_id } = req.body;

  try {
    const newTodoData: Omit<any, 'id'> = { task, description, deadline, user_id };
    const newTodo = await Todo.create(newTodoData);

    // Fetch the newly created Todo with its id
    const createdTodo = await Todo.findOne<Todo>({ where: { id: newTodo.id }, raw: true });

    res.status(201).json(createdTodo);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteTodoById(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;   

  try { 
    const deletedTodo = await Todo.destroy({ where: { id } });
    if (deletedTodo) {
      res.status(200).json({ message: 'Todo deleted successfully' });
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function getTodosByUserId(req: NextApiRequest, res: NextApiResponse) {
  const { user_id } = req.query;

  try {
    const todos = await Todo.findAll<Todo>({ where: { user_id }, raw: true });
    res.status(200).json(todos);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
