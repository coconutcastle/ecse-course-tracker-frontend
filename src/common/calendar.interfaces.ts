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

export enum CourseFor {
  REQUIRED,
  TECHNICAL_COMPLEMENTARY,
  SOCIALS_COMPLEMENTARY,
  ELECTIVE,
  MINOR
}

export interface CourseInfo {
  department: Departments;
  code: number;
  title: string;
  credits: number;
  prereqs: {
    required: CourseInfo[];
    alternative: CourseInfo[];
  };
  state: 'completed' | 'in progress' | 'failed' | 'incomplete';
  for: CourseFor;
}