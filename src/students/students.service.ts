import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentDto } from './student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<StudentDto>,
  ) {}

  async findAll(): Promise<StudentDto[]> {
    return this.studentModel.find().exec();
  }

  async findOne(studentId: string): Promise<StudentDto | null> {
    return this.studentModel.findOne({ studentId }).exec();
  }

  async create(student: StudentDto): Promise<StudentDto> {
    const createdStudent = new this.studentModel(student);
    return await createdStudent.save();
  }

  async update(studentId: string, student: StudentDto): Promise<StudentDto | null> {
    return this.studentModel.findOneAndUpdate({ studentId }, student, { new: true }).exec();
  }  

  async delete(studentId: string): Promise<void> {
    await this.studentModel.deleteOne({ studentId }).exec();
  }
}
