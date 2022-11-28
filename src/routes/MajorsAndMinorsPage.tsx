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
        <button className="degree-button" onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/engineering/undergraduate/ug_eng_electrical_computer_engineering','_blank')}>
          <div className="button-text">
            VIEW ECSE MAJORS
          </div>
        </button>
        <button className="degree-button" onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/engineering/undergraduate/ug_eng_minor_programs','_blank')}>
          <div className="button-text">
            VIEW ECSE MINORS
          </div>
        </button>
        <button className="degree-button" onClick={() => window.open('https://www.mcgill.ca/study/2022-2023/faculties/engineering/undergraduate/programs/bachelor-engineering-beng-minor-software-engineering','_blank')}>
          <div className="button-text">
            VIEW NON-ECSE MINORS
          </div>
        </button>
      </div>
    </div>
  )
}