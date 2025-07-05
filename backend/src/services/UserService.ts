import { User } from '../entities/User';
import IUser from '../interface/IUser';

export class UserService {
  constructor(private userRepo: IUser) {}

  public createUser(data: Partial<User>): Promise<User> {
    return this.userRepo.create(data);
  }

  public getUser(id: string): Promise<User | null> {
    return this.userRepo.findById(id);
  }

  public loginUser(email: string, password: string) {
    const user = this.userRepo.findByEmail(email);

    if (!user) {
      throw new Error('');
    }
  }
}
