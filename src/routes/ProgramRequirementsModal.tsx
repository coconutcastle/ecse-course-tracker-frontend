import { useState } from 'react';
import { Modal } from 'reactstrap';

export const ProgramRequirementsModal = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  return (
    <Modal
    isOpen={!isHidden}>

    </Modal>
  )
}