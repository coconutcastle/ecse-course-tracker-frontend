import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pageContent">
      <div className="title">MCGILL UNIVERSITY</div>
      <div className="title" style={{marginTop: '-30px'}}>ECSE DEGREE VISUALIZER</div>
      <div className="mt-5">
        <button 
        className="landingButton" 
        style={{ height: '80px' }}
        onClick={() => navigate('/programs')}>
          <div className="buttonText">
            VIEW MAJORS AND MINORS
          </div>
        </button>
        <button 
        className="landingButton" 
        style={{ marginTop: '40px' }}
        onClick={() => navigate('/login')}>
          <div className="buttonText">
            LOGIN
          </div>
        </button>
        <button 
        className="landingButton"
        onClick={() => navigate('/create')}>
          <div className="buttonText">
            CREATE ACCOUNT
          </div>
        </button>
      </div>
    </div>
  )
}