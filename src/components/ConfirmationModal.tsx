import { useState } from 'react';
import { Modal } from 'reactstrap';
import { TfiClose } from 'react-icons/tfi';

interface ConfirmationModalProps {
  isOpen: boolean;
  toggle: any;
}

export const ConfirmationModal = ({ isOpen, toggle }: ConfirmationModalProps) => {

  return (
    <Modal
    isOpen={isOpen}
    toggle={toggle}
    className="requirements-modal"
    size='sm'>
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
          <div className='course-info-text col-9'>yo/140</div>
        </div>
      </div>
      
    </Modal>
  )
}