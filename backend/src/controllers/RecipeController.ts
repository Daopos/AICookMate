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

  static async getRecipeByUser(req: Request, res: Response) {
    const userId = req.id;

    if (!userId) {
      res.status(401).json({ message: 'Invalid User' });
      return;
    }

    const recipes = await recipeService.getRecipeByUser(userId);
    res.status(200).json({ recipes });
    return;
  }

  static async getRecipeById(req: Request, res: Response) {
    const recipeId = req.params.id;

    if (!recipeId) {
      res.status(404).json({ message: 'Recipe Not found' });
      return;
    }

    try {
      const recipe = await recipeService.getRecipeById(recipeId);
      res.status(200).json({ recipes: recipe });
      return;
    } catch (error) {
      console.error('Error saving recipe:', error);
      res.status(500).json({ message: 'Internal server error.' });
      return;
    }
  }

  static async deleteRecipeById(req: Request, res: Response) {
    const recipeId = req.params.id;

    if (!recipeId) {
      res.status(404).json({ message: 'Recipe Not found' });
      return;
    }
    try {
      await recipeService.deleteRecipeById(recipeId);
      res.status(200).json({ message: 'successfully delete recipe' });
      return;
    } catch {
      res.status(500).json({ message: 'Internal Error' });
      return;
    }
  }
}
