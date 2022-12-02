import { Modal } from 'reactstrap';

interface ConfirmationModalProps {
  isOpen: boolean;
  toggle: any;
  modificationFunction: any;
  modificationParams: any;
  message: string;
}

export const ConfirmationModal = ({ isOpen, toggle, modificationFunction, modificationParams, message }: ConfirmationModalProps) => {

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      className="requirements-modal"
      size='md'>
      <div className=' p-4 d-flex flex-column justify-content-center align-items-center'>
        <div className='row p-3 text-center'>
          {message}
        </div>
        <div className='d-flex flex-row justify-content-center align-items-center' style={{ marginTop: '20px' }}>
          <button className="landing-button me-2"
            type='button'
            style={{ width: '180px', backgroundColor: 'white', border: '3px solid #8f78a2' }}
            onClick={() => toggle()}>
            <div className="button-text" style={{ color: '#8f78a2' }} >
              CANCEL
            </div>
          </button>
          <button className="landing-button ms-2" type='submit' style={{ width: '180px' }}
            onClick={() => {
              console.log(modificationParams)
              console.log(modificationFunction)
              modificationFunction(...Object.values(modificationParams))
              toggle();
              }}>
            <div className="button-text">
              CONFIRM
            </div>
          </button>
        </div>
      </div>

    </Modal>
  )
}