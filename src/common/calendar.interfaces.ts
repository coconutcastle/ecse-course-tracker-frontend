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

export type CourseType = keyof typeof CourseTypeText;
export type CourseState = keyof typeof CourseStateText;

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