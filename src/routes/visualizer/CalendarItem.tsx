import { useState, useEffect } from 'react';
import { Seasons, CourseInfo } from '../../common/calendar.interface';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/Go';
import { MdDelete } from 'react-icons/md';
import { CourseInfoModal } from './CourseInfoModal';
import { AddCourseModal } from './AddCourseModal';
import { ConfirmationModal } from '../../components/ConfirmationModal';

interface CalendarItemProps {
  season: Seasons;
  year: number;
  courses: CourseInfo[];
  allCourses: CourseInfo[];
  openTabs: boolean[];
  updateOpenTabs: any;
  modifySemesters: (index: number, isDelete: boolean, season?: Seasons, year?: number) => void;
  modifyCourse: (semesterIndex: number, isDelete: boolean, courseIndex: number, newCourse?: CourseInfo) => void;
  itemIndex: number;
}

export const CalendarItem = ({ season, year, courses, allCourses, openTabs, updateOpenTabs, modifySemesters, modifyCourse, itemIndex }: CalendarItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [siblingIsOpen, setSiblingIsOpen] = useState<boolean>(false);
  const [isCourseInfoModalOpen, setIsCourseInfoModalOpen] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseInfo | undefined>();
  const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState<boolean>(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState<boolean>(false);
  const [confirmModificationFunction, setConfirmModificationFunction] = useState<any>(modifySemesters);
  const [confirmModificationParams, setConfirmModificationParams] = useState<any>(undefined);
  const [confirmationMessage, setConfirmationMessage] = useState<string>('');

  useEffect(() => {
    const columnPlace = itemIndex % 3;
    setSiblingIsOpen(false);
    switch (columnPlace) {
      case 0:
        if ((openTabs[itemIndex + 1] !== undefined && openTabs[itemIndex + 1] === true) || (openTabs[itemIndex + 2] !== undefined && openTabs[itemIndex + 2] === true)) {
          setSiblingIsOpen(true);
        };
        break;
      case 1:
        if ((openTabs[itemIndex - 1] !== undefined && openTabs[itemIndex - 1] === true) || (openTabs[itemIndex + 1] !== undefined && openTabs[itemIndex + 1] === true)) {
          setSiblingIsOpen(true);
        };
        break;
      case 2:
        if ((openTabs[itemIndex - 1] !== undefined && openTabs[itemIndex - 1] === true) || (openTabs[itemIndex - 2] !== undefined && openTabs[itemIndex - 2] === true)) {
          setSiblingIsOpen(true);
        };
        break;
      default:
        console.log('bad index')
    };
  }, [openTabs]);

  return (
    <div className='flex-column' style={{ width: '33%' }}>
      <div className="calendar-item" onClick={() => {
        setIsOpen(!isOpen);
        updateOpenTabs(itemIndex);
        }}>
        <div>{`${season} ${year}`}</div>
        <div style={{ fontSize: '14px', fontWeight: 300, marginLeft: '5%', marginRight: '25%' }}>
          {`${courses.reduce((partialSum: number, course: CourseInfo) => partialSum + course.credits, 0)} credits`}
        </div>
        {isOpen ? <GoTriangleDown /> : <GoTriangleUp />}
      </div>
      {(!isOpen && siblingIsOpen) && (
        <div className="calendar-item-open" style={{ backgroundColor: '#8f78a2' }} />
      )}
      {isOpen && (
        <div className="calendar-item-open">
          {courses.map((course: CourseInfo, index) => (
            <button key={index} 
            className="calendar-item-course-item-small" 
            onClick={() => {
              setSelectedCourse(course);
              // setConfirmModificationFunction(modifyCourse);
              setIsCourseInfoModalOpen(!isCourseInfoModalOpen);
            }}>{`${course.department} ${course.code}`}</button>
          ))}
          {selectedCourse && (
            <CourseInfoModal 
            isOpen={isCourseInfoModalOpen}
            toggle={() => setIsCourseInfoModalOpen(!isCourseInfoModalOpen)}
            course={selectedCourse}
            semesterIndex={itemIndex}
            courseIndex={courses.findIndex((course: CourseInfo) => selectedCourse === course)}
            setIsConfirmationModalOpen={setIsConfirmationModalOpen}
            setConfirmModificationFunction={setConfirmModificationFunction}
            setConfirmModificationParams={setConfirmModificationParams}
            setConfirmationMessage={setConfirmationMessage}
            modifyCourse={modifyCourse}
            />
          )}
          <button key={`${season}-${year}-add`} 
          className="calendar-item-course-item-small" 
          style={{ color: 'white', backgroundColor: 'black'}}
          onClick={() => setIsAddCourseModalOpen(!isAddCourseModalOpen)}>
            + ADD COURSE
          </button>
          <AddCourseModal 
          isOpen={isAddCourseModalOpen}
          toggle={() => setIsAddCourseModalOpen(!isAddCourseModalOpen)}
          allCourses={allCourses}
          semesterIndex={itemIndex}
          courseIndex={courses.length}
          modifyCourse={modifyCourse}
          />
          <button key={`${season}-${year}-delete`} className="lowkey-button" 
          onClick={() => {
            setConfirmModificationFunction(modifySemesters);
            setConfirmModificationParams({ index: itemIndex, isDelete: true })
            setConfirmationMessage(`Are you sure you'd like to delete the semester ${season} ${year}? This action cannot be undone!`);
            setIsConfirmationModalOpen(true);
          }}>
            Delete Semester
            <MdDelete 
            className='ms-3 mb-1'/>
          </button>
          <ConfirmationModal 
          isOpen={isConfirmationModalOpen} 
          toggle={() => setIsConfirmationModalOpen(!isConfirmationModalOpen)}
          modificationFunction={modifySemesters} 
          modificationParams={confirmModificationParams}
          message={confirmationMessage}/>
        </div>
      )}
    </div>
  )
}