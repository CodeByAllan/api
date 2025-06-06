import { Router } from 'express';
import { AuthService } from '../services/auth.service';
import { HashService } from '../services/hash.service';
import { JwtService } from '../services/jwt.service';
import { PostgresDataSource } from '../database/database';
import { User } from '../entities/user.entity';
import { AuthController } from '../controllers/auth.controller';
import { AuthUserDto } from '../dtos/auth-user.dto';
import { validateDto } from '../middlewares/validate-dto.middleware';

const authRouter: Router = Router();
const userRepository = PostgresDataSource.getRepository(User);
const hashService: HashService = new HashService();
const jwtService: JwtService = new JwtService();
const authService: AuthService = new AuthService(
  userRepository,
  hashService,
  jwtService,
);
const authController: AuthController = new AuthController(authService);

authRouter
  .use(validateDto(AuthUserDto))
  .route('/login')
  .post(authController.login);
export default authRouter;
