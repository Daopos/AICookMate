import { Recipe } from '../entities/Recipe';
import IRecipe from '../interface/IRecipe';

export class RecipeService {
  constructor(private recipeRepo: IRecipe) {}

  public async saveRecipe(data: Recipe): Promise<void> {
    this.recipeRepo.create(data);
    return;
  }

  public async getRecipeById(id: string): Promise<Recipe> {
    const recipe = await this.recipeRepo.findById(id);

    if (!recipe) {
      throw new Error('Invalid');
    }

    return recipe;
  }

  public async deleteRecipeById(id: string): Promise<void> {
    const recipe = await this.recipeRepo.findById(id);

    if (!recipe) {
      throw new Error('Invalid');
    }

    await this.recipeRepo.deleteById(id);
  }
}
