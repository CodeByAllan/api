import { Router } from 'express';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';
import { User } from '../entities/user.entity';
import { PostgresDataSource } from '../database/database';
import { HashService } from '../services/hash.service';
import { validateDto } from '../middlewares/validate-dto.middleware';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { ResponseUserDto } from '../dtos/response-user.dto';
import { transformResponseDto } from '../middlewares/transform-response.middleware';

const userRouter: Router = Router();

const userRepository = PostgresDataSource.getRepository(User);
const hashService = new HashService();
const userService: UserService = new UserService(userRepository, hashService);
const userController: UserController = new UserController(userService);
userRouter
  .use(transformResponseDto(ResponseUserDto))
  .route('/')
  .post(validateDto(CreateUserDto), userController.create)
  .get(userController.getAll);
userRouter
  .route('/:id')
  .get(userController.getById)
  .patch(validateDto(UpdateUserDto), userController.update)
  .delete(userController.softDelete);

export default userRouter;
