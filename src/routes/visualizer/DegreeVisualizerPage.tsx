import { useNavigate } from 'react-router-dom';
import { Progress } from 'reactstrap';
import { Calendar } from './Calendar';

export const DegreeVisualizerPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="page-content">
        <div className="title">DEGREE VISUALIZER</div>
      </div>
      <div className="visualizer-page">
        <div className="visualizer-header">
          <button className="landing-button" onClick={() => navigate('/programs')}>
            <div className="button-text">
              Program Requirements
            </div>
          </button>
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