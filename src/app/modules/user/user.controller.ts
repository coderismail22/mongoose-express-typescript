import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const insertStudentIntoDB = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    //will call service function to send this data
    // console.log('catch data for test', req.body);

    const { password, student: studentData } = req.body;
    //todo: Zod Validation
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    //will send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student Created Successfully',
      data: result,
    });
  },
);

export const UserControllers = {
  insertStudentIntoDB,
};
