import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { ErrorResponse } from '../types/error-response.types';

export function captureErrors(): ErrorRequestHandler {
  return (
    err: ErrorResponse,
    req: Request,
    res: Response,
    _next: NextFunction,
  ) => {
    const isKnownError =
      typeof err.code === 'number' && err.code >= 400 && err.code < 600;

    const code = isKnownError ? err.code : 500;
    const message = isKnownError ? err.message : 'Unexpected error';
    const name = isKnownError ? err.name : 'UnexpectedError';
    res.status(code).json({
      message: message,
      error: name,
    });
  };
}
