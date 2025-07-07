import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { User } from '../entities/User';

const router = Router();

router.get('/:id', UserController.getById);
router.post('/', UserController.create);

export default router;
