import { TStudent } from './student.type';
import { StudentModel } from './student.model';

const insertStudentToDB = async (student: TStudent) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudents = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentById = async (studentId: string) => {
  const result = await StudentModel.findById(studentId);
  return result;
};

export const StudentServices = {
  insertStudentToDB,
  getAllStudents,
  getSingleStudentById,
};
