import { Router } from 'express';
import { GeminiController } from '../controllers/GeminiController';

const router = Router();

router.get('/gemini', GeminiController.generateRecipe);

export default router;
