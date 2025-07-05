import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { User } from '../entities/User';

const router = Router();

router.get('/:id', (req, res) => UserController.getById(req, res));
router.post('/', (req, res) => UserController.create(req, res));
export default router;
