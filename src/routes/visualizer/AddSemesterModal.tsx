import { useState } from 'react';
import { Modal, ButtonGroup, Button, Input } from 'reactstrap';
import { TfiClose } from 'react-icons/tfi';
import { Seasons } from '../../common/calendar.interfaces';
import { Field, Form, Formik, ErrorMessage } from 'formik';

interface AddSemesterModalProps {
  isOpen: boolean;
  toggle: any;
}

interface AddSemesterModalFields {
  semester: Seasons | undefined;
  year: string;
}

export const AddSemesterModal = ({ isOpen, toggle }: AddSemesterModalProps) => {
  const [seasonDropdownOpen, setSeasonDropdownOpen] = useState<boolean>(false);
  const [selectedSeason, setSelectedSeason] = useState<Seasons | undefined>();
  const [selectedYear, setSelectedYear] = useState<number | undefined>();

  const validateFields = (values: AddSemesterModalFields) => {
    const errors: Record<string, string> = {};

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
  }

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
          onSubmit={() => console.log('submitted')}>
          {({ errors }) => (
            <Form>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='p-2 mb-4'>
                  <div className='text-center mb-2' style={{ fontSize: '20px', fontWeight: 300 }}>
                    SEASON
                  </div>
                  <Field name='semester'>
                    <ButtonGroup>
                      <Button
                        className='p-2'
                        style={{ backgroundColor: '#9E86B1', border: 'none', opacity: selectedSeason === Seasons.FALL ? '70%' : '100%' }}
                        onClick={() => setSelectedSeason(Seasons.FALL)}>
                        <div className='button-text'>FALL</div>
                      </Button>
                      <Button
                        className='p-2'
                        style={{ backgroundColor: '#9E86B1', border: 'none' }}
                        onClick={() => setSelectedSeason(Seasons.WINTER)}>
                        <div className='button-text'>WINTER</div>
                      </Button>
                      <Button
                        className='p-2'
                        style={{ backgroundColor: '#9E86B1', border: 'none' }}
                        onClick={() => setSelectedSeason(Seasons.SUMMER)}>
                        <div className='button-text'>SUMMER</div>
                      </Button>
                    </ButtonGroup>
                  </Field>
                  
                </div>
                <div className='p-2'>
                  <div className='text-center mb-2' style={{ fontSize: '20px', fontWeight: 300 }}>
                    YEAR
                  </div>
                  <Input className='course-input-text' type='text'></Input>
                </div>
              </div>
              <div className='d-flex flex-column align-items-center mb-4' style={{ marginTop: '40px' }}>
                <button className='landing-button'>
                  <div className="button-text">
                    ADD
                  </div>
                </button>
              </div>
            </Form>
          )}
          {/* <div className='d-flex flex-column justify-content-center align-items-center'>
            <div className='p-2 mb-4'>
              <div className='text-center mb-2' style={{ fontSize: '20px', fontWeight: 300 }}>
                SEASON
              </div>
              <ButtonGroup>
                <Button 
                className='p-2' 
                style={{ backgroundColor: '#9E86B1', border: 'none', opacity: selectedSeason === Seasons.FALL ? '70%' : '100%' }} 
                onClick={() => setSelectedSeason(Seasons.FALL)}>
                  <div className='button-text'>FALL</div>
                </Button>
                <Button 
                className='p-2' 
                style={{ backgroundColor: '#9E86B1', border: 'none' }} 
                onClick={() => setSelectedSeason(Seasons.WINTER)}>
                  <div className='button-text'>WINTER</div>
                </Button>
                <Button 
                className='p-2' 
                style={{ backgroundColor: '#9E86B1', border: 'none' }} 
                onClick={() => setSelectedSeason(Seasons.SUMMER)}>
                  <div className='button-text'>SUMMER</div>
                </Button>
              </ButtonGroup>
            </div>
            <div className='p-2'>
              <div className='text-center mb-2' style={{ fontSize: '20px', fontWeight: 300 }}>
                YEAR
              </div>
              <Input className='course-input-text' type='text'></Input>
            </div>
          </div>
        <div className='d-flex flex-column align-items-center mb-4' style={{ marginTop: '40px' }}>
          <button className='landing-button'>
            <div className="button-text">
              ADD
            </div>
          </button>
        </div> */}
        </Formik>
      </div>
    </Modal>
  )
}