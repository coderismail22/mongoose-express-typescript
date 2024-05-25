import { userModel } from './user.model';
import config from '../../config';
import { TUser } from './user.type';
import { TStudent } from '../student/student.type';
import { StudentModel } from '../student/student.model';

const insertStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use default password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';

  //set manually generated id
  userData.id = '2030100001';

  // create a user
  const newUser = await userModel.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    // set id , _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; //reference _id

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  insertStudentIntoDB,
};
