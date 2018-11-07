import express from 'express';
import pics from '../controllers/pics';

const { getAll } = pics;

const router = express.Router();

router.get('/', getAll);

export default router;
