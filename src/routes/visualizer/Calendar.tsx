import { useState } from 'react';
import { Seasons, SemesterInfo, CourseInfo } from "../../common/calendar.interfaces";
import { CalendarItem } from "./CalendarItem";
import courseData from '../../prototype/calendarItems.json'
import { useQuery } from 'react-query';
import { AddSemesterModal } from './AddSemesterModal';


export const Calendar = () => {
  const [semesters, setSemesters] = useState<SemesterInfo[]>(Object.values(JSON.parse(JSON.stringify(courseData))));
  const [openTabs, setOpenTabs] = useState<boolean[]>(Array(Object.values(semesters).length).fill(false));
  const [isAddSemesterModalOpen, setIsAddSemesterModalOpen] = useState<boolean>(false);
  
  const updateOpenTabs = (index: number) => {
    const newOpenTabs = [...openTabs];
    newOpenTabs.splice(index, 1, !newOpenTabs[index]);
    setOpenTabs(newOpenTabs);
  };

  const modifySemesters = (index: number, isDelete: boolean, season?: Seasons, year?: number) => {
    const newSemesters = [...semesters];
    if (isDelete) {
      newSemesters.splice(index, 1)
    } else if (season && year) {
      newSemesters.splice(semesters.length, 1, {
        semester: season,
        year: year,
        courses: []
      });
    };
    setSemesters(newSemesters);
  };

  return (
    <div className='calendar-container'>
      {semesters.map((semester: any, index) => 
        <CalendarItem 
        key={index} 
        season={semester.season} 
        year={semester.year} 
        courses={semester.courses}
        openTabs={openTabs}
        updateOpenTabs={updateOpenTabs}
        modifySemesters={modifySemesters}
        index={index}
        />
      )}
      <div className='ms-3'>
        <button className="degree-button" onClick={() => setIsAddSemesterModalOpen(!isAddSemesterModalOpen)}>
          <div className="button-text">
            + ADD SEMESTER
          </div>
        </button>
        <AddSemesterModal
        isOpen={isAddSemesterModalOpen}
        toggle={() => setIsAddSemesterModalOpen(!isAddSemesterModalOpen)}
        />
      </div>
      
    </div>
  )
}