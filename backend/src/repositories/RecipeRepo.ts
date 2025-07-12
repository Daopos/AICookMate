import { Repository } from 'typeorm';
import IRecipe from '../interface/IRecipe';
import { Recipe } from '../entities/Recipe';
import { AppDataSource } from '../config/data-source';

export class RecipeRepo implements IRecipe {
  private repo: Repository<Recipe>;

  constructor() {
    this.repo = AppDataSource.getRepository(Recipe);
  }

  public async create(data: Recipe): Promise<void> {
    this.repo.create(data);
  }

  public async findById(id: string): Promise<Recipe | null> {
    return await this.repo.findOneBy({ id: id });
  }

  public async deleteById(id: string): Promise<void> {
    this.repo.delete({ id: id });
  }
}
