export interface CourseDto {
  id: string;
  courseName: string;
  details: string;
  prerequisites: string[];
  instructorId: string;
  students: string[];
  instructor: {
    id: string;
    name: string;
  };
  isCompleted: boolean;
}

export interface CourseWithLessonDto extends CourseDto {
  lessons: LessonDto[];
}

export interface LessonDto {
  id: string;
  title: string;
  week: number;
  desc: string;
  quizes: string[];
  module: number;
  episode: number;
  videoUrl: string;
  order: number;
  courseId: string;
  isLessonCompleted: boolean;
}

export enum Role {
  Admin = "Admin",
  Student = "Student",
}

export interface UserDto {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
}