import { model } from 'mongoose';
import { studentSchema } from './student.schema';
import { TStudent } from './student.type';

//Model Creation:

//First letter of the model name should be written capital and it should be singular.

export const studentModel = model<TStudent>('Student', studentSchema);
