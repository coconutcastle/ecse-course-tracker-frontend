import { Progress } from 'reactstrap';
import { Calendar } from './Calendar';

export const DegreeVisualizerPage = () => {
  return (
    <>
      <div className="page-content">
        <div className="title">DEGREE VISUALIZER</div>
      </div>
      <div className="visualizer-page">
        <div className="visualizer-header">
          <button className="landing-button">
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
      </div>
    </>
  )
}