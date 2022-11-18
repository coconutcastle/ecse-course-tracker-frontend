import { Seasons } from "../../common/calendar.interfaces"
import { CalendarItem } from "./CalendarItem"

export const Calendar = () => {
  return (
    <div className='calendar-container'>
      <CalendarItem season={Seasons.FALL} year={2021} siblingIsOpen={false}/>
    </div>
  )
}