import { useState } from 'react';
import { Modal } from 'reactstrap';
import { TfiClose } from 'react-icons/tfi';
import { CourseInfo } from '../../common/calendar.interfaces';

interface CourseInfoModalProps {
  isOpen: boolean;
  toggle: any;
  course: CourseInfo;
}

export const CourseInfoModal = ({ isOpen, toggle, course }: CourseInfoModalProps) => {

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
        
        <div>
          hello
        </div>
      </div>
      
    </Modal>
  )
}