import { Request, Response } from 'express';
import { IAuthService } from '../types/auth-service.interface';

export class AuthController {
  constructor(private authService: IAuthService) {}

  login = async (req: Request, res: Response) => {
    const token = await this.authService.login(req.body);
    res.status(200).send(token);
  };
}
