import express from 'express';
import user from '../controllers/users';

const { getAll } = user;

const router = express.Router();

router.get('/', getAll);

export default router;
