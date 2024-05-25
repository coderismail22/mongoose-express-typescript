import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

//Modular Flow : Route -> Controller -> Service -><- DB (Model in Mongoose)

// router.post('/create-student', StudentControllers.createStudent); // No more used
router.get('/:studentId', StudentControllers.getSingleStudentById);


export const StudentRoutes = router;
