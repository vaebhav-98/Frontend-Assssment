import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const ScheduleBreakdown = () => {
  const movies = useSelector((state) => state.movies.data);
  const [weeks, setWeeks] = useState({
    Saturday: 0,
    Sunday: 0,
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
  })
  const weeklyBreakdown = () => {
    const weeks = {
      Saturday: 0,
      Sunday: 0,
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
    };

    movies.forEach((item) => {
      item.show.schedule.days.forEach((day) => {
        // weeks[day].push(item);
        weeks[day] = Number(weeks[day] || 0) + 1;
      });
    });
    return weeks;
  };

  let daysCount = weeklyBreakdown();

  return (
    <div>
      <div>Schedule Breakdown</div>
      <div>
        {
          Object.entries(daysCount).map((item) => {
            return <div className='flex gap-2'>
              <span>{item[0]}</span>
              <span>{item[1]}</span>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default ScheduleBreakdown