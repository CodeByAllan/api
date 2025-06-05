import { plainToInstance } from 'class-transformer';
import { NextFunction, Request, Response } from 'express';

export function transformResponseDto<T extends object>(DtoClass: new () => T) {
  return (req: Request, res: Response, next: NextFunction) => {
    const originalJson = res.json;
    res.json = (data: any) =>
      res.statusCode < 400
        ? originalJson.call(
            res,
            plainToInstance(DtoClass, data, { excludeExtraneousValues: true }),
          )
        : originalJson.call(res, data);
    next();
  };
}
