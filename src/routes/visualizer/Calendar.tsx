import { useState } from 'react';
import { Seasons, SemesterInfo, CourseInfo } from "../../common/calendar.interface";
import { CalendarItem } from "./CalendarItem";
import { useQuery } from 'react-query';
import { AddSemesterModal } from './AddSemesterModal';

interface CalendarProps {
  semesters: SemesterInfo[];
  allCourses: CourseInfo[];
  modifySemesters: (index: number, isDelete: boolean, season?: Seasons, year?: number) => void;
  modifyCourse: (semesterIndex: number, isDelete: boolean, courseIndex: number, newCourse?: CourseInfo) => void;
}

export const Calendar = ({ semesters, allCourses, modifySemesters, modifyCourse }: CalendarProps) => {
  const [openTabs, setOpenTabs] = useState<boolean[]>(Array(Object.values(semesters).length).fill(false));
  const [isAddSemesterModalOpen, setIsAddSemesterModalOpen] = useState<boolean>(false);
  
  const updateOpenTabs = (index: number) => {
    const newOpenTabs = [...openTabs];
    newOpenTabs.splice(index, 1, !newOpenTabs[index]);
    setOpenTabs(newOpenTabs);
  };

  console.log(semesters)

  return (
    <div className='calendar-container'>
      {semesters.map((semester: SemesterInfo, index) => 
        <CalendarItem 
        key={index} 
        season={semester.season} 
        year={semester.year} 
        courses={semester.courses}
        allCourses={allCourses}
        openTabs={openTabs}
        updateOpenTabs={updateOpenTabs}
        modifySemesters={modifySemesters}
        modifyCourse={modifyCourse}
        itemIndex={index}
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
        numberSemesters={semesters.length}
        modifySemesters={modifySemesters}
        />
      </div>
      
    </div>
  )
}