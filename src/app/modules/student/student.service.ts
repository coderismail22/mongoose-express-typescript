import { Student } from './student.interface';
import { StudentModel } from './student.model';

const insertStudentToDB = async (student: Student) => {
  const result = await StudentModel.create();
  return result;
};

export const StudentServices = {
  insertStudentToDB,
};
