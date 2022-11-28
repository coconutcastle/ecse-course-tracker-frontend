import { useState } from 'react';
import { Modal } from 'reactstrap';
import { TfiClose } from 'react-icons/tfi';
import { CourseInfo, ProgramCurriculumInfo, UserInfo } from '../../common/calendar.interface';

interface ProgramRequirementsModalProps {
  isOpen: boolean;
  toggle: any;
  user: UserInfo;
  // program: ProgramCurriculumInfo;    //for later
  program: CourseInfo[];
  accumulatedCredits: number;
}

export const ProgramRequirementsModal = ({ isOpen, toggle, program, accumulatedCredits }: ProgramRequirementsModalProps) => {

  return (
    <Modal
    isOpen={isOpen}
    toggle={toggle}
    className="requirements-modal"
    size='lg'>
      <div className='p-3'>
        <div className='text-center title-secondary position-relative top-0 end-25'>
          PROGRAM REQUIREMENTS
          <div className='position-relative float-end me-5'>
            <button
            style={{ height: '50px', 'width': '50px', borderRadius: '50%', position: 'fixed', backgroundColor: "black", zIndex: 2 }}
            onClick={toggle}>
              <TfiClose color='white' />
            </button>
          </div> 
        </div>
        <div className='row p-3'>
          <div className='course-info-text fw-bold col-3'>Unfulfilled Credits: </div>
          <div className='course-info-text col-9'>{accumulatedCredits}/140</div>
        </div>
        <div className='row p-3'>
          <div className='course-info-text fw-bold col-6'>Remaining Required Courses: </div>
            <div className='course-info-text col-6'>{
              (program.filter((course: CourseInfo) => course.type === 'REQUIRED')).map((c: CourseInfo, index) => 
              <div key={index}>{`${c.department} ${c.code}`}</div>)}
            </div>
        </div>
        <div className='row p-3'>
          <div className='course-info-text fw-bold col-6'>Remaining Technical Complemetaries: </div>
            <div className='course-info-text col-6'>{
              (program.filter((course: CourseInfo) => course.type === 'TECHNICAL_COMPLEMENTARY')).map((c: CourseInfo, index) => 
              <div key={index}>{`${c.department} ${c.code}`}</div>)}
            </div>
        </div>
      </div>
      
    </Modal>
  )
}