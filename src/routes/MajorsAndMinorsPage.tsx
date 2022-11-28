import { useState } from 'react';
import { BackButton } from "../components/BackButton";

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
        </button>
        {majorsButtonsOpen && (
          <>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/engineering/undergraduate/ug_eng_electrical_computer_engineering', '_blank')}>
              <div className="button-text">
                ELECTRICAL
              </div>
            </button>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/engineering/undergraduate/ug_eng_electrical_computer_engineering', '_blank')}>
              <div className="button-text">
                COMPUTER
              </div>
            </button>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/engineering/undergraduate/ug_eng_electrical_computer_engineering', '_blank')}>
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
        </button>
        {minorsButtonsOpen && (
          <>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/engineering/undergraduate/ug_eng_electrical_computer_engineering', '_blank')}>
              <div className="button-text">
                ELECTRICAL
              </div>
            </button>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/engineering/undergraduate/ug_eng_electrical_computer_engineering', '_blank')}>
              <div className="button-text">
                COMPUTER
              </div>
            </button>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/engineering/undergraduate/ug_eng_electrical_computer_engineering', '_blank')}>
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
        </button>
        {outsideMinorsButtonsOpen && (
          <>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/engineering/undergraduate/ug_eng_electrical_computer_engineering', '_blank')}>
              <div className="button-text">
                ARTS/SCI
              </div>
            </button>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/engineering/undergraduate/ug_eng_electrical_computer_engineering', '_blank')}>
              <div className="button-text">
                EDUCATION
              </div>
            </button>
            <button className="degree-button" style={{ backgroundColor: '#e8dcf1' }} onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/engineering/undergraduate/ug_eng_electrical_computer_engineering', '_blank')}>
              <div className="button-text">
                OTHER
              </div>
            </button>
          </>
        )}
      </div>
    </div>
  )
}