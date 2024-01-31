import * as mongoose from 'mongoose';
import { StudentDto } from './student.dto';

export const StudentSchema = new mongoose.Schema<StudentDto>({
  studentId: String,
  name: String,
  age: Number,
  gender: String,
  class: String,
  teacherId: String,
});
