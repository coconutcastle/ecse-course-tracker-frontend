import { useState } from 'react';
import { Modal } from 'reactstrap';
import { TfiClose } from 'react-icons/tfi';
import { CourseInfo, CourseType, CourseStateText, CourseTypeText, CourseState } from '../../common/calendar.interface';
import { MdDelete } from 'react-icons/md';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface CourseInfoModalProps {
  isOpen: boolean;
  toggle: any;
  course: CourseInfo;
  semesterIndex: number;
  courseIndex: number;
  modifyCourse: (semesterIndex: number, isDelete: boolean, courseIndex: number, newCourse?: CourseInfo) => void;
}

export const CourseInfoModal = ({ isOpen, toggle, course, semesterIndex, courseIndex, modifyCourse }: CourseInfoModalProps) => {
  const [isUpdatingState, setIsUpdatingState] = useState<boolean>(false);
  const [newCourseState, setNewCourseState] = useState<CourseState | null>(null);

  return (
    <Modal
    isOpen={isOpen}
    toggle={toggle}
    className="requirements-modal"
    size='lg'>
      <div className='p-3'>
        <div className='text-center title-secondary position-relative top-0 end-25'>
          {`${course.department} ${course.code}`}
          <div className='position-relative float-end me-5'>
            <button
            style={{ height: '50px', 'width': '50px', borderRadius: '50%', position: 'fixed', backgroundColor: "black", zIndex: 2 }}
            onClick={toggle}>
              <TfiClose color='white' />
            </button>
          </div> 
        </div>
        <div className='row p-3'>
          <div className='course-info-text fw-bold col-3'>Title: </div>
          <div className='course-info-text col-9'>{course.title}</div>
        </div>
        <div className='row p-3'>
          <div className='course-info-text fw-bold col-3'>Credits: </div>
          <div className='course-info-text col-9'>{course.credits}</div>
        </div>
        <div className='row p-3'>
          <div className='course-info-text fw-bold col-3'>Type: </div>
          <div className='course-info-text col-9'>{CourseTypeText[course.type]}</div>
        </div>
        <div className='row p-3'>
          <div className='course-info-text fw-bold col-3'>Prerequisites: </div>
          <div className='course-info-text col-9'>{
            (course.prereqs).map((prereq: string, index) => 
            <div key={index}>{prereq}</div>)
          }</div>
        </div>
        <div className='row p-3'>
          <div className='course-info-text fw-bold col-3'>Restrictions: </div>
          <div className='course-info-text col-9'>{
            (course.restrictions).map((restr: string, index) => 
            <div key={index}>{restr}</div>)
          }</div>
        </div>
        <div className='row p-3'>
          <div className='course-info-text fw-bold col-3'>Status: </div>
          <div className='course-info-text col-5'>
            {isUpdatingState ? (
              <Select
              id="demo-simple-select"
              value={!!newCourseState ? newCourseState : course.state}
              label="State"
              onChange={(e) => setNewCourseState(e.target.value as CourseState)}
            >
              <MenuItem value={'COMPLETED'}>Completed</MenuItem>
              <MenuItem value={'IN_PROGRESS'}>In Progress</MenuItem>
              <MenuItem value={'FAILED'}>Failed</MenuItem>
              <MenuItem value={'INCOMPLETE'}>Incomplete</MenuItem>
            </Select>
            ) : (
              <>{!!newCourseState ? CourseStateText[newCourseState] : CourseStateText[course.state]}</>
            )}
            </div>
          <div className='col-4 d-flex justify-content-end'>
            <button 
            className='small-button'
            onClick={() => {
              if (isUpdatingState) {
                if (newCourseState) {
                  var newCourse = {...course}
                  newCourse.state = newCourseState;
                  modifyCourse(semesterIndex, false, courseIndex, newCourse);
                };
                setIsUpdatingState(false)
              } else {
                setIsUpdatingState(true)
              };
            }}>
              <div className='button-text'>{isUpdatingState ? 'Done' : 'Update'}</div>
            </button>
          </div>
        </div>
        <div className='d-flex justify-content-start mt-3 mb-3 ms-2'>
          <button 
          className="lowkey-button-white-background"
          onClick={() => {
            modifyCourse(semesterIndex, true, courseIndex);
            toggle()
          }}>
            Remove Course
            <MdDelete 
            className='ms-3 mb-1'/>
          </button>
        </div>
        
      </div>
      
    </Modal>
  )
}