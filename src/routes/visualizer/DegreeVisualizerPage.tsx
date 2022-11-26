import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Progress } from 'reactstrap';
import { BackButton } from '../../components/BackButton';
import { Calendar } from './Calendar';
import { ProgramRequirementsModal } from './ProgramRequirementsModal';

export const DegreeVisualizerPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="page-content">
        <div className="title">DEGREE VISUALIZER</div>
        <BackButton />
      </div>
      <div className="visualizer-page">
        <div className="visualizer-header">
          <button className="landing-button" onClick={() => setIsModalOpen(!isModalOpen)}>
            <div className="button-text">
              VIEW REQUIREMENTS
            </div>
          </button>
          <ProgramRequirementsModal 
          isOpen={isModalOpen}
          toggle={() => setIsModalOpen(!isModalOpen)}
          />
          <div className='col-5 ms-5'>
            <Progress
            value={70}
            barClassName='progress-bar'
            />
          </div>
          <div className='col-2 ms-3'>
            70/140 Credits
          </div>
        </div>
        <Calendar />
        <div className='d-flex flex-column align-items-center' style={{ marginTop: '40px' }}>
          <button className="landing-button">
            <div className="button-text">
              SAVE
            </div>
          </button>
        </div>
        
      </div>
    </>
  )
}