import { Router } from 'express';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';
import { User } from '../entities/user.entity';
import { PostgresDataSource } from '../database/database';

const userRouter: Router = Router();

const userRepository = PostgresDataSource.getRepository(User);
const userService: UserService = new UserService(userRepository);
const userController: UserController = new UserController(userService);
userRouter
  .route('/user')
  .post(userController.create)
  .get(userController.getAll);
userRouter
  .route('/user/:id')
  .get(userController.getById)
  .patch(userController.update)
  .delete(userController.softDelete);

export default userRouter;
