import { Request, Response } from 'express';
import { UserRepo } from '../repositories/UserRepo';
import { UserService } from '../services/UserService';
import { validate as isUUId } from 'uuid';
import { generateToken } from '../util/generateToken';

const userService = new UserService(new UserRepo());
export class UserController {
  static async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res
        .status(400)
        .json({ message: 'Name, email, and password are required.' });
      return;
    }

    try {
      const newUser = await userService.createUser(req.body);
      const token = generateToken(newUser.id);

      res
        .status(201)
        .cookie('token', token, {
          httpOnly: true,
          secure: false, // Set to true in production with HTTPS
          sameSite: 'lax',
        })
        .json({ message: 'User created successfully' });
      return;
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
      return;
    }
  }

  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: 'Invalid email or password' });
      return;
    }

    const user = await userService.loginUser(email, password);

    if (!user) {
      res.status(400).json({ message: 'Invalid email or password' });
      return;
    }
    const token = generateToken(user.id);

    res.status(200).cookie('token', token, {
      httpOnly: true,
      secure: false, // Set to true in production with HTTPS
      sameSite: 'lax',
    });
    return;
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;

    if (!isUUId(id)) {
      res.status(400).json({ message: 'Not an Id' });
    }

    const user = await userService.getUser(id);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json(user);
    return;
  }
}
