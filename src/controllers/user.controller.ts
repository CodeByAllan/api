import { UserResponse } from '../types/user-response.types';
import { IUserService } from '../types/user-service.interface';
import { Request, Response } from 'express';

export class UserController {
  constructor(private readonly userService: IUserService) {}
  create = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.create(req.body);
      res.status(201).send(user);
    } catch (err: any) {
      const response: UserResponse = err.message.includes('already exists')
        ? { code: 409, error: 'Conflict', message: err.message }
        : {
            code: 500,
            error: 'Internal Server Error',
            message: 'An unexpected error occurred',
          };

      res.status(response.code).send(response);
    }
  };
  getAll = async (req: Request, res: Response) => {
    const users = await this.userService.getAll();
    res.status(200).send(users);
  };
  getById = async (req: Request, res: Response) => {
    try {
      const id: number = Number(req.params.id);
      const user = await this.userService.getById(id);
      res.status(200).send(user);
    } catch (err: any) {
      const response: UserResponse = err.message.includes('not found')
        ? { code: 404, error: 'Not Found', message: err.message }
        : {
            code: 500,
            error: 'Internal Server Error',
            message: 'An unexpected error occurred',
          };
      res.status(response.code).send(response);
    }
  };
  update = async (req: Request, res: Response) => {
    try {
      const id: number = Number(req.params.id);
      const user = await this.userService.update(id, req.body);
      res.status(200).send(user);
    } catch (err: any) {
      const response: UserResponse = err.message.includes('not found')
        ? { code: 404, error: 'Not Found', message: err.message }
        : {
            code: 500,
            error: 'Internal Server Error',
            message: 'An unexpected error occurred',
          };
      res.status(response.code).send(response);
    }
  };
  softDelete = async (req: Request, res: Response) => {
    try {
      const id: number = Number(req.params.id);
      await this.userService.delete(id);
      res.status(204).send();
    } catch (err: any) {
      const response: UserResponse = err.message.includes('not found')
        ? { code: 404, error: 'Not Found', message: err.message }
        : {
            code: 500,
            error: 'Internal Server Error',
            message: 'An unexpected error occurred',
          };
      res.status(response.code).send(response);
    }
  };
}
