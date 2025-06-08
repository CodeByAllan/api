import { IUserService } from '../types/user-service.interface';
import { Request, Response } from 'express';

export class UserController {
  constructor(private readonly userService: IUserService) {}
  create = async (req: Request, res: Response) => {
    const user = await this.userService.create(req.body);
    res.status(201).send(user);
  };
  getAll = async (req: Request, res: Response) => {
    const users = await this.userService.getAll();
    res.status(200).send(users);
  };
  getById = async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const user = await this.userService.getById(id);
    res.status(200).send(user);
  };
  update = async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    const user = await this.userService.update(id, req.body);
    res.status(200).send(user);
  };
  softDelete = async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    await this.userService.delete(id);
    res.status(204).send();
  };
}
