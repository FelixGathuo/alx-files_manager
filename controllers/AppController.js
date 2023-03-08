import redisClient from '../utils/redis';
import dbClient from '../utils/db';

export const getStatus = (req, res) => {
  const redis = redisClient.isAlive();
  const db = dbClient.isAlive();

  res.send({ redis, db });
};

export const getStats = async (req, res) => {
  const users = await dbClient.nbUsers();
  const files = await dbClient.nbFiles();

  res.send({ users, files });
};
