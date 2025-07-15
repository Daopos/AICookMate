import { User } from '../entities/User';
import IUser from '../interface/IUser';
import bcrypt from 'bcrypt';

export class UserService {
  constructor(private userRepo: IUser) {}

  public async createUser(data: Partial<User>): Promise<User> {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(data.password!, salt);

    data.password = password;
    return this.userRepo.create(data);
  }

  public async getUser(id: string): Promise<User | null> {
    return await this.userRepo.findById(id);
  }

  public async createUserByGoogle(
    data: Partial<User>,
    id: string
  ): Promise<User | null> {
    const user = await this.userRepo.findByProviderId(id);

    if (user) {
      return user;
    }

    return await this.userRepo.create(data);
  }

  public async getUserByProviderId(id: string): Promise<User | null> {
    return await this.userRepo.findByProviderId(id);
  }

  public async loginUser(
    email: string,
    password: string
  ): Promise<User | null> {
    const user = await this.userRepo.findByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid');
    }

    return user;
  }
}
