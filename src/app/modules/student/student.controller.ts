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
    res.status(500).json({
      success: false,
      message: 'Could not create student data.',
      error: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudents();
    res.status(200).json({
      success: true,
      message: 'Students data retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudentById = async (req: Request, res: Response) => {
  const studentId = req.params.studentId;
  const result = await StudentServices.getSingleStudentById(studentId);
  try {
    res.status(200).json({
      success: true,
      message: 'Student data retrieved successfully',
      data: result,
    });
  } catch (error) {}
};
export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudentById,
};
