import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-content">
      <div className="title">MCGILL UNIVERSITY</div>
      <div className="title" style={{marginTop: '-30px'}}>ECSE DEGREE VISUALIZER</div>
      <div className="mt-5">
        <button 
        className="landing-button" 
        style={{ height: '80px' }}
        onClick={() => navigate('/programs')}>
          <div className="button-text">
            VIEW MAJORS AND MINORS
          </div>
        </button>
        <button 
        className="landing-button" 
        style={{ marginTop: '40px' }}
        onClick={() => navigate('/login')}>
          <div className="button-text">
            LOGIN
          </div>
        </button>
        <button 
        className="landing-button"
        onClick={() => navigate('/create')}>
          <div className="button-text">
            CREATE ACCOUNT
          </div>
        </button>
      </div>
    </div>
  )
}