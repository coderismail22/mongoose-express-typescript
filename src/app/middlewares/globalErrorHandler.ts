import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500;
  const errorMsg = err.message || 'Something went wrong';

  return res.status(statusCode).json({
    success: "false",
    errorMsg,
    error: err,
  });
};

export default globalErrorHandler;
