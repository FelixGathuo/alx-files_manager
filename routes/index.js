import express from 'express';

import { getStatus, getStats } from '../controllers/AppController';
import { postNew, getMe } from '../controllers/UsersController';
import { getConnect, getDisconnect } from '../controllers/AuthController';
import {
  postUpload, getShow, getIndex, putPublish, putUnPublish, getFile,
} from '../controllers/FilesController';

const router = express.Router();

router.get('/status', getStatus);
router.get('/stats', getStats);
router.post('/users', postNew);
router.get('/users/me', getMe);
router.get('/connect', getConnect);
router.get('/disconnect', getDisconnect);
router.post('/files', postUpload);
router.get('/files', getIndex);
router.get('/files/:id', getShow);
router.put('/files/:id/publish', putPublish);
router.put('/files/:id/unpublish', putUnPublish);
router.get('/files/:id/data', getFile);

export default router;
