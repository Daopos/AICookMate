import { Repository } from 'typeorm';
import IRecipe from '../interface/IRecipe';
import { Recipe } from '../entities/Recipe';
import { AppDataSource } from '../config/data-source';

export class RecipeRepo implements IRecipe {
  private repo: Repository<Recipe>;

  constructor() {
    this.repo = AppDataSource.getRepository(Recipe);
  }

  public async create(data: Partial<Recipe>): Promise<void> {
    const newRecipe = this.repo.create(data);
    await this.repo.save(newRecipe);
  }

  public async findById(id: string): Promise<Recipe | null> {
    return await this.repo.findOneBy({ id: id });
  }

  public async deleteById(id: string): Promise<void> {
    await this.repo.delete({ id: id });
  }
}
