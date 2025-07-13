import { Recipe } from '../entities/Recipe';

export default interface IRecipe {
  create(recipe: Partial<Recipe>): Promise<void>;
  findById(id: string): Promise<Recipe | null>;
  deleteById(id: string): Promise<void>;
}
