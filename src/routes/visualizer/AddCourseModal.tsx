import { useState } from 'react';
import { Modal, ButtonGroup, Button } from 'reactstrap';
import { TfiClose } from 'react-icons/tfi';
import { Seasons, CourseInfo } from '../../common/calendar.interface';
import { Field, Form, Formik, ErrorMessage } from 'formik';

interface AddCourseModalProps {
  isOpen: boolean;
  toggle: any;
  semesterIndex: number;
  courseIndex: number;
  modifyCourse: (semesterIndex: number, isDelete: boolean, courseIndex: number, newCourse?: CourseInfo) => void;
}

interface AddCourseModalFields {
  semester: Seasons | undefined;
  year: string;
}

export const AddCourseModal = ({ isOpen, toggle, semesterIndex, courseIndex, modifyCourse }: AddCourseModalProps) => {

  const validateFields = (values: AddCourseModalFields) => {
    const errors: Record<string, string> = {};
    console.log(values);

    if (!values.semester) {
      errors['semester'] = 'You must select a season!'
    };
    if (values.year.length <= 0) {
      errors['year'] = 'This field cannot be empty!'
    };
    if (values.year.length !== 4 || !(/^\d+$/.test(values.year))) {
      errors['year'] = 'Please enter a valid year!'
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
          ADD SEMESTER
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
            semester: undefined,
            year: ''
          }}
          validate={validateFields}
          onSubmit={(values: AddCourseModalFields) => {
            modifyCourse(semesterIndex, false, courseIndex)
            toggle();
          }}>
          {({ values, setFieldValue }) => (
            <Form>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='p-2 mb-2'>
                  <div className='text-center mb-2' style={{ fontSize: '20px', fontWeight: 300 }}>
                    SEASON
                  </div>
                  <ButtonGroup>
                    <Button
                      className='p-2'
                      style={{ backgroundColor: '#9E86B1', border: 'none', opacity: values.semester === Seasons[Seasons.FALL] ? '70%' : '100% ' }}
                      on
                      onClick={() => setFieldValue('semester', Seasons[Seasons.FALL])}>
                      <div className='button-text'>FALL</div>
                    </Button>
                    <Button
                      className='p-2'
                      style={{ backgroundColor: '#9E86B1', border: 'none', opacity: values.semester === Seasons[Seasons.WINTER] ? '70%' : '100% ' }}
                      onClick={() => setFieldValue('semester', Seasons[Seasons.WINTER])}>
                      <div className='button-text'>WINTER</div>
                    </Button>
                    <Button
                      className='p-2'
                      style={{ backgroundColor: '#9E86B1', border: 'none', opacity: values.semester === Seasons[Seasons.SUMMER] ? '70%' : '100% ' }}
                      onClick={() => setFieldValue('semester', Seasons[Seasons.SUMMER])}>
                      <div className='button-text'>SUMMER</div>
                    </Button>
                  </ButtonGroup>
                  <ErrorMessage name="semester" className="text-field-error" component="div" />
                </div>
                <div className='p-2'>
                  <div className='text-center mb-2' style={{ fontSize: '20px', fontWeight: 300 }}>
                    YEAR
                  </div>
                  <Field name='year' className='course-input-text' type='text' />
                  <ErrorMessage name="year" className="text-field-error" component="div" />
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