import { Request, Response } from 'express';
import { RecipeService } from '../services/RecipeService';
import { RecipeRepo } from '../repositories/RecipeRepo';
import { UserRepo } from '../repositories/UserRepo';

const recipeService = new RecipeService(new RecipeRepo(), new UserRepo());

export class RecipeController {
  static async create(req: Request, res: Response) {
    if (!req.body) {
      return;
    }
    const userId = req.id;

    if (typeof userId !== 'string') {
      res.status(400).json({ message: 'User ID is missing or invalid.' });
      return;
    }
    const data = {
      AIGenerated: req.body.prompt,
    };

    try {
      await recipeService.saveRecipe(data, userId);
      res.status(201).json({ message: 'Successfully saved recipe.' });
      return;
    } catch (error) {
      console.error('Error saving recipe:', error);
      res.status(500).json({ message: 'Internal server error.' });
      return;
    }
  }
}
