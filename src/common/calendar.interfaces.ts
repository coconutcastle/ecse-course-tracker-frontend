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

export interface CourseInfo {
  department: Departments;
  code: number;
  title: string;
  credits: number;
  prereqs: CourseInfo[];
  state: 'completed' | 'in progress' | 'failed' | 'incomplete';
  isRequired: boolean;
  isTechnicalComplementary: boolean;
  isSocialsComplementary: boolean;
  isElective: boolean;
}