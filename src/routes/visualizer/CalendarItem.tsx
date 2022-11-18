import { useState } from 'react';
import { Seasons, CourseInfo } from '../../common/calendar.interfaces';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/Go';

interface CalendarItemProps {
  season: Seasons;
  year: number;
  courses: CourseInfo[];
  // siblingIsOpen: boolean;
  // updateOpens: any;
  index: number;
}

export const CalendarItem = ({ season, year, courses, index}: CalendarItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [siblingIsOpen, setSiblingIsOpen] = useState<boolean>(false);

  return (
    <div className='flex-column' style={{ width: '33%' }}>
      <div className="calendar-item" onClick={() => {
        // updateOpens(index);
        setIsOpen(!isOpen);
        }}>
        <div>{`${season} ${year}`}</div>
        <div style={{ fontSize: '12px', fontWeight: 300, marginLeft: '5%', marginRight: '25%' }}>{'17 credits'}</div>
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
        </div>
      )}
    </div>
  )
}