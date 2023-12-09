import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../database/models/user.model';  

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return getUsers(req, res);
  } else if (req.method === 'POST') {
    return createUser(req, res);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await User.findAll<User>({ raw: true });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function createUser(req: NextApiRequest, res: NextApiResponse) {
  const { username, email } = req.body;
  try {
    const newUser = await User.create({ username, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error });
  }
}
