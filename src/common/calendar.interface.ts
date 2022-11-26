import { ECSE_COURSE_CODE } from "./constants";

export enum Seasons {
  WINTER,
  SUMMER,
  FALL
}

export enum Departments {
  ECSE,
  MATH,
  FACC,
  PHYS,
  CHEM,
  COMP
}

export const CourseTypeText = {
  REQUIRED: 'Required',
  TECHNICAL_COMPLEMENTARY: 'Technical Complementary',
  SOCIALS_COMPLEMENTARY: 'Humanities Complementary',
  ELECTIVE: 'Elective',
  MINOR: 'Minor'
}

export const CourseStateText = {
  COMPLETED: 'Completed',
  IN_PROGRESS: 'In Progress',
  FAILED: 'Failed',
  INCOMPLETE: 'Incomplete'
}

export const MajorsText = {
  ELECTRICAL: 'Electrical',
  COMPUTER: 'Computer',
  SOFTWARE: 'Software',
  NON_ECSE: 'Non-ECSE'
}

export const MinorsText = {
  ELECTRICAL: 'Electrical',
  COMPUTER: 'Computer',
  SOFTWARE: 'Software',
  ARTS: 'Arts',
  CHEMISTRY: 'Chemistry',
  ECONOMICS: 'Economics',
  ENVIRONMET: 'Environment',
  MATHEMATICS: 'Mathematics',
  PHYSICS: 'Physics',
  OTHER: 'Other'
}

export type CourseType = keyof typeof CourseTypeText;
export type CourseState = keyof typeof CourseStateText;
export type Majors = keyof typeof MajorsText;
export type Minors = keyof typeof MinorsText;

export interface CourseInfo {
  department: Departments;
  code: number;
  title: string;
  credits: number;
  prereqs: {
    required: CourseInfo[];
    alternative: CourseInfo[];
  };
  state: CourseState;
  type: CourseType;
}

export interface SemesterInfo {
  season: Seasons;
  year: number;
  courses: CourseInfo[];
}

export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  major: Majors;
  minor: Minors;
  semesters: SemesterInfo[];
}

export interface ProgramCurriculumInfo {

}