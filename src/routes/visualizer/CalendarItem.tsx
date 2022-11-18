import { useState } from 'react';
import { Seasons, CourseInfo } from '../../common/calendar.interfaces';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/Go';

interface CalendarItemProps {
  season: Seasons;
  year: number;
  courses?: CourseInfo[];
  siblingIsOpen: boolean;
}

export const CalendarItem = ({ season, year, siblingIsOpen }: CalendarItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='flex-column col-4'>
      <div className="calendar-item" onClick={() => setIsOpen(!isOpen)}>
        <div>{`${Seasons[season]} ${year}`}</div>
        <div style={{ fontSize: '12px', fontWeight: 300, marginLeft: '5%', marginRight: '30%' }}>{'17 credits'}</div>
        {isOpen ? <GoTriangleDown /> : <GoTriangleUp />}
      </div>
      {(!isOpen && siblingIsOpen) && (
        <div className="calendar-item-open" style={{ backgroundColor: '#8f78a2'}} />
      )}
      {isOpen && (
        <div className="calendar-item-open">
          <button className="calendar-item-course-item-small">{'ECSE 202'}</button>
          <button className="calendar-item-course-item-small">{'MATH 240'}</button>
          <button className="calendar-item-course-item-small">{'ECSE 211'}</button>

        </div>
      )}
    </div>
    

  )
}