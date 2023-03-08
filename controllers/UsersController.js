import sha1 from 'sha1';
import { ObjectId } from 'mongodb';
import RedisClient from '../utils/redis';
import dbClient from '../utils/db';

export const postNew = async (req, res) => {
  const { email, password } = req.body;

  if (!email) return res.status(400).json({ error: 'Missing email' });
  if (!password) return res.status(400).json({ error: 'Missing password' });

  let user = await dbClient.findUser({ email });
  if (user) return res.status(400).json({ error: 'Already exist' });

  user = await dbClient.createUser(email, sha1(password));

  return res.json(user);
};

export const getMe = async (req, res) => {
  const token = req.header('X-token');

  const uid = await RedisClient.get(`auth_${token}`);

  if (!uid) return res.status(401).json({ error: 'Unauthorized' });

  const user = await dbClient.findUser({ _id: ObjectId(uid) });

  return res.json({ email: user.email, id: user._id });
};
