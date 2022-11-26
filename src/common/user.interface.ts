export enum Majors {
  ELECTRICAL = 'Electrical',
  COMPUTER = 'Computer',
  SOFTWARE = 'Software',
  NON_ECSE = 'Non-ECSE'
}

export enum Minors {
  ELECTRICAL,
  COMPUTER,
  SOFTWARE,
  NON_ECSE
}

export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  major: Majors;
  minor: Minors
}