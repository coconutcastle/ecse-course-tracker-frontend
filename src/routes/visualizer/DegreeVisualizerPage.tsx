import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import courseData from '../../prototype/calendarItems.json';
import courses from '../../prototype/some_courses.json';
import { BackButton } from '../../components/BackButton';
import { Calendar } from './Calendar';
import { ProgramRequirementsModal } from './ProgramRequirementsModal';
import { SemesterInfo, Seasons, CourseInfo, CourseState, CourseStateText, UserInfo } from '../../common/calendar.interface';
import { MdCheckCircle } from 'react-icons/md';

interface DegreeVisualizerPageProps {
  user: UserInfo;
  setUser: (newUser: UserInfo) => void;
}

export const DegreeVisualizerPage = ({ user, setUser }: DegreeVisualizerPageProps) => {
  const [allCourses, setAllCourses] = useState<CourseInfo[]>(JSON.parse(JSON.stringify(courses)))
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [accumulatedCredits, setAccumulatedCredits] = useState<number | undefined>();

  const modifySemesters = (index: number, isDelete: boolean, season?: Seasons, year?: number) => {
    const { semesters, ...info } = user;
    const newSemesters: SemesterInfo[] = [...semesters];
    console.log('modifying', index, isDelete, season, year);
    if (isDelete) {
      newSemesters.splice(index, 1);
    } else if (season && year) {
      newSemesters.splice(semesters.length, 0, {
        season: season,
        year: year,
        courses: []
      });
    };
    setUser({...info, semesters: newSemesters});
  };

  const modifyCourse = (semesterIndex: number, isDelete: boolean, courseIndex: number, newCourse?: CourseInfo) => {
    const { semesters, ...info } = user;
    const newSemesters: SemesterInfo[] = [...semesters];
    console.log('modifying', semesterIndex, courseIndex, newCourse)
    if (isDelete) {
      (newSemesters[semesterIndex].courses).splice(courseIndex, 1);
    } else if (newCourse) {
      (newSemesters[semesterIndex].courses).splice(courseIndex, 1, newCourse);   //use length as index if adding a course  
    };
    setUser({...info, semesters: newSemesters});
  };

  useEffect(() => {
    var credits = 0;
    (user.semesters).forEach((semester: SemesterInfo) => {
      semester.courses.forEach((course: CourseInfo) => {
        if (CourseStateText[course.state] === CourseStateText.COMPLETED) {
          credits += course.credits;
        }
      });
    });
    setAccumulatedCredits(credits)
  }, [user])

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
          user={user}
          program={allCourses}
          accumulatedCredits={accumulatedCredits || 0}
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
        <Calendar semesters={user.semesters} allCourses={allCourses} modifySemesters={modifySemesters} modifyCourse={modifyCourse} />
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