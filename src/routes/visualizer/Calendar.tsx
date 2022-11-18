import { useState } from 'react';
import { Seasons } from "../../common/calendar.interfaces";
import { CalendarItem } from "./CalendarItem";
import courseData from '../../prototype/calendarItems.json'
import { useQuery } from 'react-query';


export const Calendar = () => {
  const [semesters, setSemesters] = useState<any>(JSON.parse(JSON.stringify(courseData)));
  const [openTabs, setOpenTabs] = useState<boolean[]>(Array(Object.values(semesters).length).fill(false));
  const [siblingsOpen, setSiblingsOpen] = useState<boolean[]>(Array(Object.values(semesters).length).fill(false));
  
  // const updateOpenTabs = (index: number) => {
  //   var newTabs = [...openTabs];
  //   newTabs[index] = !newTabs[index];
  //   if ((index % 3 === 0) && (openTabs[(index + 1) % 3] === true)) {
  //     if(openTabs.slice(index, index + 3).inc)
  //   }
  //   else if ((index % 3 === 1) && ((openTabs[(index + 1) % 3] === true) || (openTabs[(index - 1) % 3] === true))) {
  //     newTabs[index] = !newTabs[index];
  //   }
  //   else if (openTabs[(index - 1) % 3] === true) {
  //     newTabs[index] = !newTabs[index];
  //   }
  //   setOpenTabs()
  // }

  return (
    <div className='calendar-container'>
      {Object.values(semesters).map((semester: any, index) => 
        <CalendarItem 
        key={index} 
        season={semester.season} 
        year={semester.year} 
        courses={semester.courses} 
        // siblingIsOpen={siblingsOpen[index]}
        // updateOpens={updateOpenTabs}
        index={index}
        />
      )}
    </div>
  )
}