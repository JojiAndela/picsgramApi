import express from 'express';
import user from '../controllers/users';
import { signUpValidator, signInValidator } from '../middlewares/validator';

const { signup, login } = user;

const router = express.Router();

router.post('/', signInValidator, login);
router.post('/new', signUpValidator, signup);

export default router;
