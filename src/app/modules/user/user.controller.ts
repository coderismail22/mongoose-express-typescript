import { Request, Response } from 'express';
import { UserServices } from './user.service';

const insertStudentIntoDB = async (req: Request, res: Response) => {
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
    res.status(200).json({
      success: true,
      message: 'Student Created Successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Could not create student data.',
      error: error,
    });
  }
};

export const userControllers = {
  insertStudentIntoDB,
};
