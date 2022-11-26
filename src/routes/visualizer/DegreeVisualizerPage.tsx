import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import courseData from '../../prototype/calendarItems.json'
import { BackButton } from '../../components/BackButton';
import { Calendar } from './Calendar';
import { ProgramRequirementsModal } from './ProgramRequirementsModal';
import { SemesterInfo, Seasons, CourseInfo, CourseState, CourseStateText } from '../../common/calendar.interfaces';
import { MdCheckCircle } from 'react-icons/md';

export const DegreeVisualizerPage = () => {
  const [semesters, setSemesters] = useState<SemesterInfo[]>(Object.values(JSON.parse(JSON.stringify(courseData))));
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [accumulatedCredits, setAccumulatedCredits] = useState<number | undefined>();
  const navigate = useNavigate();

  const modifySemesters = (index: number, isDelete: boolean, season?: Seasons, year?: number) => {
    const newSemesters = [...semesters];
    if (isDelete) {
      newSemesters.splice(index, 1)
    } else if (season && year) {
      newSemesters.splice(semesters.length, 0, {
        season: season,
        year: year,
        courses: []
      });
    };
    setSemesters(newSemesters);
  };

  useEffect(() => {
    var credits = 0;
    semesters.forEach((semester: SemesterInfo) => {
      semester.courses.forEach((course: CourseInfo) => {
        if (CourseStateText[course.state] === CourseStateText.COMPLETED) {
          credits += course.credits;
        }
      });
    });
    setAccumulatedCredits(credits)
  }, [semesters])

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
            <div style={{ height: '15px', width: '100%', backgroundColor: '#F3F3F3' }}>
              <div 
              className='progress-bar'
              style={{ width: accumulatedCredits ? `${Math.ceil((accumulatedCredits/140) * 100)}%` : '0%' }}
              ></div>
            </div>
          </div>
          <div className='col-2 ms-3'>
            {`${accumulatedCredits}/140 Credits`}
          </div>
        </div>
        <Calendar semesters={semesters} modifySemesters={modifySemesters}/>
        <div className='d-flex flex-row justify-content-center align-items-center' style={{ marginTop: '40px' }}>
          <button className="landing-button"
          onClick={() => {
            const check = document.getElementById("save-confirmation-check");
            if (check) {
              check.style.opacity = '100%';
              setTimeout(() => {
                check.style.opacity = '0%';
              }, 2000);
            };
          }}>
            <div className="button-text">
              SAVE
            </div>
          </button>
          <MdCheckCircle 
          id="save-confirmation-check"
          style={{ opacity: '0%' }}
          />
        </div>
        
      </div>
    </>
  )
}