import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentDto } from './student.dto';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('students')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all students' })
  async getAllStudents(): Promise<StudentDto[]> {
    return this.studentsService.findAll();
  }

  @Get('filter')
  @ApiOperation({ summary: 'Filter students by name or age'  })
  @ApiQuery({ name: 'name', required: false, description: 'Filter by name' })
  @ApiQuery({ name: 'age', required: false, description: 'Filter by age' })
  async findAll(@Query('name') name?: string, @Query('age') age?: number): Promise<StudentDto[]> {
    return this.studentsService.findAll(name, age);
  }

  @Get(':studentId')
  @ApiOperation({ summary: 'Get a single student by ID' })
  async findOne(@Param('studentId') studentId: string): Promise<StudentDto | null> {
    return this.studentsService.findOne(studentId);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new student' })
  async create(@Body() student: StudentDto): Promise<StudentDto> {
    return this.studentsService.create(student);
  }

  @Put(':studentId')
  @ApiOperation({ summary: 'Update a student by ID' })
  async update(@Param('studentId') studentId: string, @Body() student: StudentDto): Promise<StudentDto | null> {
    return this.studentsService.update(studentId, student);
  }

  @Delete(':studentId')
  @ApiOperation({ summary: 'Delete a student by ID' })
  async delete(@Param('studentId') studentId: string): Promise<void> {
    return this.studentsService.delete(studentId);
  }
}
