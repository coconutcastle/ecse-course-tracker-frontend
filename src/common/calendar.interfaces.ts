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

export interface SemesterInfo {
  season: Seasons;
  year: number;
  courses: CourseInfo[];
}

export const CourseForText: Record<CourseFor, string> = {
  [CourseFor.REQUIRED]: 'Required',
  [CourseFor.TECHNICAL_COMPLEMENTARY]: 'Technical Complementary',
  [CourseFor.SOCIALS_COMPLEMENTARY]: 'Humanities Complementary',
  [CourseFor.ELECTIVE]: 'Elective',
  [CourseFor.MINOR]: 'Minor'
}

export const CourseStateText = {
  'completed': 'Completed',
  'in progress': 'In Progress',
  'failed': 'Failed',
  'incomplete': 'Incomplete'
}