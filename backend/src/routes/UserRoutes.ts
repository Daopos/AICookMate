import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const router = Router();

router.get('/:id', UserController.getById);
router.post('/register', UserController.create);
router.post('/login', UserController.login);

export default router;
