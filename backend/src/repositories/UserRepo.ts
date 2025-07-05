import { Repository } from 'typeorm';
import IUser from '../interface/IUser';
import { User } from '../entities/User';
import { AppDataSource } from '../config/data-source';

export class UserRepo implements IUser {
  private repo: Repository<User>;

  constructor() {
    this.repo = AppDataSource.getRepository(User);
  }

  public async create(data: Partial<User>): Promise<User> {
    const user = this.repo.create(data);
    return await this.repo.save(user);
  }

  public async findById(id: string): Promise<User | null> {
    return await this.repo.findOneBy({ id: id });
  }

  public async findByEmail(email: string): Promise<User | null> {
    return await this.repo.findOneBy({ email: email });
  }
}
