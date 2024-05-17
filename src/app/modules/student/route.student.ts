import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

//Modular Flow : Route -> Controller -> Service -><- DB (Model in Mongoose)

router.post('/create-student', StudentControllers.createStudent);
router.get('/:studentId', StudentControllers.getSingleStudentById);
router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;
