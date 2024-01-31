import { ApiProperty } from '@nestjs/swagger';

export class StudentDto {
  @ApiProperty({ description: 'Roll No. for the student' })
  studentId: string;

  @ApiProperty({ description: 'Name of the student' })
  name: string;

  @ApiProperty({ description: 'Age',
  minimum: 1,
  default: 1,
 })
  age: number;

  @ApiProperty({ description: 'Gender' })
  gender: string;

  @ApiProperty({ description: 'Class' })
  class: string;

  @ApiProperty({ description: 'ID of the teacher associated with the student' })
  teacherId: string;
}
