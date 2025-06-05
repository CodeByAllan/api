import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

export function validateDto<T extends object>(DtoClass: new () => T) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoInstance = plainToInstance(DtoClass, req.body);
    const validationErrors = await validate(dtoInstance);
    if (validationErrors.length > 0) {
      res.status(400).json({
        message: 'Validation failed',
        errors: validationErrors.map((err) => ({
          property: err.property,
          constraints: err.constraints,
        })),
      });
      return;
    }
    req.body = dtoInstance;
    next();
  };
}
