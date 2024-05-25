import { Response } from 'express';
import httpStatus from 'http-status';

//define response type with generics
type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
};

//generic function
const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(httpStatus.OK).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};

export default sendResponse;
