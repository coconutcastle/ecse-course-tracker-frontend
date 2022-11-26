import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { TfiClose } from 'react-icons/tfi';

interface ProgramRequirementsModalProps {
  isOpen: boolean;
  toggle: any;
}

export const ProgramRequirementsModal = ({ isOpen, toggle }: ProgramRequirementsModalProps) => {

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
        
        <div>
          hello
        </div>
      </div>
      
    </Modal>
  )
}