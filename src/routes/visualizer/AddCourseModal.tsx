import { useState } from 'react';
import { Modal, ButtonGroup, Button } from 'reactstrap';
import { TfiClose } from 'react-icons/tfi';
import { CourseInfo, Departments } from '../../common/calendar.interface';
import { Field, Form, Formik, ErrorMessage } from 'formik';
// import { Autocomplete, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

interface AddCourseModalProps {
  isOpen: boolean;
  toggle: any;
  allCourses: CourseInfo[];
  semesterIndex: number;
  courseIndex: number;
  modifyCourse: (semesterIndex: number, isDelete: boolean, courseIndex: number, newCourse?: CourseInfo) => void;
}

interface AddCourseModalFields {
  newCourse: string;
}

export const AddCourseModal = ({ isOpen, toggle, allCourses, semesterIndex, courseIndex, modifyCourse }: AddCourseModalProps) => {

  const validateFields = (values: AddCourseModalFields) => {
    const errors: Record<string, string> = {};

    if (values.newCourse.length == 0) {
      errors['newCourse'] = 'You must select a course!'
    };

    if (Object.keys(errors).length > 0) {
      return errors;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      className="requirements-modal"
      size='lg'>
      <div className='p-3'>
        <div className='text-center title-secondary position-relative top-0 end-25'>
          ADD COURSE
          <div className='position-relative float-end me-5'>
            <button
              style={{ height: '50px', 'width': '50px', borderRadius: '50%', position: 'fixed', backgroundColor: "black", zIndex: 2 }}
              onClick={toggle}>
              <TfiClose color='white' />
            </button>
          </div>
        </div>
        <Formik
          initialValues={{
            newCourse: '',
          }}
          validate={validateFields}
          onSubmit={(values: AddCourseModalFields) => {
            const foundCourse = allCourses.find((course: CourseInfo) => {
              const splits = values.newCourse.split(' ');
              return ((course.department as unknown as string) === splits[0]) && (course.code as unknown as string === splits[1])
            });
            if(foundCourse) {
              var newCourse = {...foundCourse};
              newCourse['state'] = 'INCOMPLETE';
              modifyCourse(semesterIndex, false, courseIndex, newCourse);
            } else {
              console.log('ERROR: Course not found.')
            };
            toggle();
          }}>
          {({ values, setFieldValue }) => (
            <Form>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='p-2 mb-2'>
                  <div className='text-center mb-2' style={{ fontSize: '20px', fontWeight: 300 }}>
                    SELECT A COURSE
                    <Autocomplete
                      disablePortal
                      id="combo-box-courses"
                      onChange={(event: any, newValue: string | null) => {
                        setFieldValue('newCourse', newValue);
                      }}
                      inputValue={values.newCourse}
                      onInputChange={(event, newInputValue) => {
                        setFieldValue('newCourse', newInputValue);
                      }}
                      options={allCourses.map((course: CourseInfo) => `${course.department} ${course.code}`)}
                      sx={{ width: 300, borderColor: "#8f78a2", marginTop: '30px',}}
                      renderInput={(params) => 
                      <TextField {...params} label="Course" />}
                    />
                  </div>
                  <ErrorMessage name="semester" className="text-field-error" component="div" />
                </div>
              </div>
              <div className='d-flex flex-column align-items-center mb-4' style={{ marginTop: '40px' }}>
                <button className='landing-button' type='submit'>
                  <div className="button-text">
                    ADD
                  </div>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  )
}