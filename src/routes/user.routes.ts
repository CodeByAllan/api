import { Router } from 'express';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';
import { User } from '../entities/user.entity';
import { PostgresDataSource } from '../database/database';
import { HashService } from '../services/hash.service';
import { validateDto } from '../middlewares/validate-dto.middleware';
import { CreateUserDto } from '../dtos/create-user.dto';
import { auth } from '../middlewares/auth.middleware';
import { JwtService } from '../services/jwt.service';
import { AuthorizeAdminOrOwner } from '../middlewares/authorize-admin-owner.middleware';
import { CacheService } from '../services/cache.service';
import { transformResponseDto } from '../middlewares/transform-response.middleware';
import { ResponseUserDto } from '../dtos/response-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

const publicUser: Router = Router();
const protectUser: Router = Router();

const jwtService: JwtService = new JwtService();
const userRepository = PostgresDataSource.getRepository(User);
const hashService = new HashService();
const cacheService = new CacheService();
const userService: UserService = new UserService(
  userRepository,
  hashService,
  cacheService,
);
const protect = [auth(jwtService), AuthorizeAdminOrOwner()];
const userController: UserController = new UserController(userService);

publicUser.post('/', validateDto(CreateUserDto), userController.create);

protectUser
  .use(transformResponseDto(ResponseUserDto))
  .route('/')
  .all(...protect)
  .get(userController.getAll);

protectUser
  .route('/:id')
  .all(...protect)
  .get(userController.getById)
  .patch(validateDto(UpdateUserDto), userController.update)
  .delete(userController.softDelete);

export { publicUser, protectUser };
