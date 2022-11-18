import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { TfiMenu, TfiClose } from 'react-icons/tfi';

interface SideMenuProps {
  setIsLoggedIn: (newLoggedIn: boolean) => void;
}

export const SideMenu = ({ setIsLoggedIn }: SideMenuProps) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);   //is the menu hidden or not
  const navigate = useNavigate();

  return (
    <>
      <div className='mt-3 ms-3'>
        <button
          style={{ height: '60px', 'width': '60px', borderRadius: '50%', position: 'fixed', backgroundColor: "black", zIndex: 2 }}
          onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <TfiMenu color='white' /> : <TfiClose color='white' />}
        </button>
      </div>
      <div className={'side-menu'} style={{ left: isHidden ? '-400px' : '0' }}>
        <div className='d-flex flex-column align-items-center'>
          <div className='title'>OPTIONS</div>
          <button className='menu-button' onClick={() => navigate('/visualizer')}>
            <div className='button-text' style={{ color: 'black' }}>
              DEGREE VISUALIZER
            </div>
          </button>
          <button className='menu-button' onClick={() => navigate('/programs')}>
            <div className='button-text' style={{ color: 'black' }}>
              VIEW MAJORS & MINORS
            </div>
          </button>
          <button className='menu-button' onClick={() => navigate('/visualizer')}>
            <div className='button-text' style={{ color: 'black' }}>
              PROFILE
            </div>
          </button>
          <button className='menu-button' 
          style={{ backgroundColor: 'black' }} 
          onClick={() => {
            setIsLoggedIn(false);
            navigate('/');
          }}>
            <div className='button-text'>
              LOGOUT
            </div>
          </button>
        </div>
      </div>
      <div className={isHidden ? '' : 'hide-screen'} />
    </>
  )
}