import { Request, Response } from 'express';
import { StudentServices } from './student.service';
const createStudent = async (req: Request, res: Response) => {
  try {
    //will call service function to send this data
    console.log('catch data for test', req.body);
    const { student: studentData } = req.body;
    const result = await StudentServices.insertStudentToDB(studentData);

    //will send response
    res.status(200).json({
      success: true,
      message: 'Student Created Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
};
