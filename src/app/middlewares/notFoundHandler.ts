import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  return res.status(httpStatus.OK).json({
    success: false,
    message: 'API Not Found !',
    error: '',
  });
};

export default notFoundHandler;
