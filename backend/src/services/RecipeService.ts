import { Recipe } from '../entities/Recipe';
import IRecipe from '../interface/IRecipe';
import IUser from '../interface/IUser';

export class RecipeService {
  constructor(
    private recipeRepo: IRecipe,
    private userRepo: IUser
  ) {}

  public async saveRecipe(
    data: Partial<Recipe>,
    userId: string
  ): Promise<void> {
    const user = await this.userRepo.findById(userId);
    if (!user) throw new Error('User not found');
    const targetLetter = '🧂';

    if (!data) {
      throw new Error('data is not valid');
      return;
    }

    if (!data.AIGenerated?.includes(targetLetter)) {
      throw new Error('data is not valid');
      return;
    }
    const index = data.AIGenerated.indexOf(targetLetter);
    const title = data.AIGenerated.slice(0, index).trim();
    const recipeToSave: Partial<Recipe> = {
      ...data,
      title,
      user,
    };

    await this.recipeRepo.create(recipeToSave);
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
