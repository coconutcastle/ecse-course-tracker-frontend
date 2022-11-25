import { useState, useEffect } from 'react';
import { Seasons, CourseInfo } from '../../common/calendar.interfaces';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/Go';

interface CalendarItemProps {
  season: Seasons;
  year: number;
  courses: CourseInfo[];
  openTabs: boolean[];
  updateOpenTabs: any;
  index: number;
}

export const CalendarItem = ({ season, year, courses, index, openTabs, updateOpenTabs }: CalendarItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [siblingIsOpen, setSiblingIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const columnPlace = index % 3;
    setSiblingIsOpen(false);
    switch (columnPlace) {
      case 0:
        if ((openTabs[index + 1] !== undefined && openTabs[index + 1] === true) || (openTabs[index + 2] !== undefined && openTabs[index + 2] === true)) {
          setSiblingIsOpen(true);
        };
        break;
      case 1:
        if ((openTabs[index - 1] !== undefined && openTabs[index - 1] === true) || (openTabs[index + 1] !== undefined && openTabs[index + 1] === true)) {
          setSiblingIsOpen(true);
        };
        break;
      case 2:
        if ((openTabs[index - 1] !== undefined && openTabs[index - 1] === true) || (openTabs[index - 2] !== undefined && openTabs[index - 2] === true)) {
          setSiblingIsOpen(true);
        };
        break;
      default:
        console.log('bad index')
    };
  }, [openTabs])

  return (
    <div className='flex-column' style={{ width: '33%' }}>
      <div className="calendar-item" onClick={() => {
        setIsOpen(!isOpen);
        updateOpenTabs(index);
        }}>
        <div>{`${season} ${year}`}</div>
        <div style={{ fontSize: '12px', fontWeight: 300, marginLeft: '5%', marginRight: '25%' }}>{`${17 - index} credits`}</div>
        {isOpen ? <GoTriangleDown /> : <GoTriangleUp />}
      </div>
      {(!isOpen && siblingIsOpen) && (
        <div className="calendar-item-open" style={{ backgroundColor: '#8f78a2' }} />
      )}
      {isOpen && (
        <div className="calendar-item-open">
          {courses.map((course: CourseInfo, index) => 
            <button key={index} className="calendar-item-course-item-small">{`${course.department} ${course.code}`}</button>
          )}
          <button key={index} className="calendar-item-course-item-small" style={{ color: 'white', backgroundColor: 'black'}}>+ ADD COURSE</button>
        </div>
      )}
    </div>
  )
}