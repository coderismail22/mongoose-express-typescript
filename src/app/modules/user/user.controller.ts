import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const insertStudentIntoDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    //will call service function to send this data
    // console.log('catch data for test', req.body);

    const { password, student: studentData } = req.body;
    //todo: Zod Validation
    const result = await UserServices.insertStudentIntoDB(
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
  } catch (error) {
    next(error);
  }
};

export const userControllers = {
  insertStudentIntoDB,
};
