import { useState } from 'react';
import { Modal } from 'reactstrap';
import { TfiClose } from 'react-icons/tfi';
import { CourseInfo, CourseFor, CourseForText, CourseStateText } from '../../common/calendar.interfaces';

interface CourseInfoModalProps {
  isOpen: boolean;
  toggle: any;
  course: CourseInfo;
}

export const CourseInfoModal = ({ isOpen, toggle, course }: CourseInfoModalProps) => {
  console.log(course)
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
          <div className='course-info-text col-9'>{Object.values(CourseForText)[parseInt(CourseFor[course.for])]}</div>
        </div>
        <div className='row p-3'>
          <div className='course-info-text fw-bold col-3'>Prerequisites: </div>
          <div className='course-info-text col-9'>{
            [...course.prereqs.required, ...course.prereqs.alternative].map((prereq: CourseInfo) => 
            <div>{`${prereq.department} ${prereq.code}`}</div>)
          }</div>
        </div>
        <div className='row p-3'>
          <div className='course-info-text fw-bold col-3'>Status: </div>
          <div className='course-info-text col-9'>{CourseStateText[course.state]}</div>
        </div>
        
      </div>
      
    </Modal>
  )
}