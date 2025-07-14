import { Router } from 'express';
import { RecipeController } from '../controllers/RecipeController';
import authentication from '../middleware/authentication';

const router = Router();

router.post('/recipe', authentication, RecipeController.create);
router.get('/recipe/:id', RecipeController.getRecipeById);
router.get('/recipes', authentication, RecipeController.getRecipeByUser);
router.delete('/recipe/:id', RecipeController.deleteRecipeById);

export default router;
