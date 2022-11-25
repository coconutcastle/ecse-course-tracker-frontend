import { useState } from 'react';
import { Seasons } from "../../common/calendar.interfaces";
import { CalendarItem } from "./CalendarItem";
import courseData from '../../prototype/calendarItems.json'
import { useQuery } from 'react-query';


export const Calendar = () => {
  const [semesters, setSemesters] = useState<any>(JSON.parse(JSON.stringify(courseData)));
  const [openTabs, setOpenTabs] = useState<boolean[]>(Array(Object.values(semesters).length).fill(false));
  const [siblingsOpen, setSiblingsOpen] = useState<boolean[]>(Array(Object.values(semesters).length).fill(false));
  
  const updateOpenTabs = (index: number) => {
    const newOpenTabs = [...openTabs];
    newOpenTabs.splice(index, 1, !newOpenTabs[index])
    setOpenTabs(newOpenTabs);
  }

  return (
    <div className='calendar-container'>
      {Object.values(semesters).map((semester: any, index) => 
        <CalendarItem 
        key={index} 
        season={semester.season} 
        year={semester.year} 
        courses={semester.courses}
        openTabs={openTabs}
        updateOpenTabs={updateOpenTabs}
        index={index}
        />
      )}
      <div className='ms-3'>
        <button className="degree-button">
          <div className="button-text">
            + ADD SEMESTER
          </div>
        </button>
      </div>
      
    </div>
  )
}