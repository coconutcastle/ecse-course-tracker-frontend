import { useState } from 'react';
import { BackButton } from "../components/BackButton";
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const dropArrowStyle = {
  color: 'white',
  height: '30px',
  width: '30px'
}

export const MajorsAndMinorsPage = () => {
  const [majorsButtonsOpen, setMajorsButtonsOpen] = useState<boolean>(false);
  const [minorsButtonsOpen, setMinorsButtonsOpen] = useState<boolean>(false);
  const [outsideMinorsButtonsOpen, setOutsideMinorsButtonsOpen] = useState<boolean>(false);
  return (
    <div className="page-content">
      <div className="title">MAJORS & MINORS</div>
      <BackButton />
      <div className="mt-5">
        <button className="degree-button" onClick={() => setMajorsButtonsOpen(!majorsButtonsOpen)}>
          <div className="button-text">
            VIEW ECSE MAJORS
          </div>
          {majorsButtonsOpen ? <RiArrowDropUpLine className='drop-arrow' /> : <RiArrowDropDownLine className='drop-arrow' />}
        </button>
        {majorsButtonsOpen && (
          <>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/engineering/undergraduate/programs/bachelor-engineering-beng-electrical-engineering', '_blank')}>
              <div className="button-text">
                ELECTRICAL
              </div>
            </button>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/engineering/undergraduate/programs/bachelor-engineering-beng-computer-engineering', '_blank')}>
              <div className="button-text">
                COMPUTER
              </div>
            </button>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/engineering/undergraduate/programs/bachelor-engineering-beng-co-op-software-engineering', '_blank')}>
              <div className="button-text">
                SOFTWARE
              </div>
            </button>
          </>
        )}
        <button className="degree-button" onClick={() => setMinorsButtonsOpen(!minorsButtonsOpen)}>
          <div className="button-text">
            VIEW ECSE MINORS
          </div>
          {minorsButtonsOpen ? <RiArrowDropUpLine className='drop-arrow' /> : <RiArrowDropDownLine className='drop-arrow' />}
        </button>
        {minorsButtonsOpen && (
          <>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/science/undergraduate/programs/bachelor-science-bsc-minor-electrical-engineering', '_blank')}>
              <div className="button-text">
                ELECTRICAL
              </div>
            </button>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/engineering/undergraduate/programs/bachelor-engineering-beng-minor-software-engineering', '_blank')}>
              <div className="button-text">
                SOFTWARE
              </div>
            </button>
          </>
        )}
        <button className="degree-button" onClick={() => setOutsideMinorsButtonsOpen(!outsideMinorsButtonsOpen)}>
          <div className="button-text">
            VIEW NON-ECSE MINORS
          </div>
          {outsideMinorsButtonsOpen ? <RiArrowDropUpLine className='drop-arrow' /> : <RiArrowDropDownLine className='drop-arrow' />}
        </button>
        {outsideMinorsButtonsOpen && (
          <>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/arts/undergraduate/ug_arts_minor_concentrations', '_blank')}>
              <div className="button-text">
                ARTS
              </div>
            </button>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/engineering/undergraduate/ug_eng_minor_programs', '_blank')}>
              <div className="button-text">
                ENGINEERING
              </div>
            </button>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/isa/student/minor', '_blank')}>
              <div className="button-text">
                EDUCATION
              </div>
            </button>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/macdonald/undergraduate/ug_faes_minor_programs', '_blank')}>
              <div className="button-text">
                ENVIRONMENT
              </div>
            </button>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/desautels/programs/bcom/academics/minors-non-management-students/management-minors-non-management-students', '_blank')}>
              <div className="button-text">
                MANAGEMENT
              </div>
            </button>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/music/programs/minor', '_blank')}>
              <div className="button-text">
                MUSIC
              </div>
            </button>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/science/undergraduate/ug_sci_minor_programs', '_blank')}>
              <div className="button-text">
                SCIENCE
              </div>
            </button>
          </>
        )}
      </div>
    </div>
  )
}