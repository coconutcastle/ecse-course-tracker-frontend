import { useState, useEffect } from 'react';
import { Seasons, CourseInfo } from '../../common/calendar.interfaces';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/Go';
import { MdDelete } from 'react-icons/md';
import { CourseInfoModal } from './CourseInfoModal';

interface CalendarItemProps {
  season: Seasons;
  year: number;
  courses: CourseInfo[];
  openTabs: boolean[];
  updateOpenTabs: any;
  modifySemesters: (index: number, isDelete: boolean, season?: Seasons, year?: number) => void;
  itemIndex: number;
}

export const CalendarItem = ({ season, year, courses, openTabs, updateOpenTabs, modifySemesters, itemIndex }: CalendarItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [siblingIsOpen, setSiblingIsOpen] = useState<boolean>(false);
  const [isCourseInfoModalOpen, setIsCourseInfoModalOpen] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<CourseInfo | undefined>();

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
              setIsCourseInfoModalOpen(!isCourseInfoModalOpen);
            }}>{`${course.department} ${course.code}`}</button>
          ))}
          {selectedCourse && (
            <CourseInfoModal 
            isOpen={isCourseInfoModalOpen}
            toggle={() => setIsCourseInfoModalOpen(!isCourseInfoModalOpen)}
            course={selectedCourse}
            />
          )}
          <button key={`${season}-${year}-add`} className="calendar-item-course-item-small" style={{ color: 'white', backgroundColor: 'black'}}>+ ADD COURSE</button>
          <button key={`${season}-${year}-delete`} className="lowkey-button" onClick={() => modifySemesters(itemIndex, true)}>
            Delete Semester
            <MdDelete 
            className='ms-3 mb-1'/>
          </button>
        </div>
      )}
    </div>
  )
}