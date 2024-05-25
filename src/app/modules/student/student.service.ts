import { TStudent } from './student.type';
import { StudentModel } from './student.model';


const getAllStudents = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentById = async (studentId: string) => {
  const result = await StudentModel.findById(studentId);
  return result;
};

export const StudentServices = {
  getAllStudents,
  getSingleStudentById,
};
