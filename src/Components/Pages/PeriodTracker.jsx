import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import css from "../Styles/PeriodTracker.module.css"
import CircleIcon from '@mui/icons-material/Circle';

const PeriodTracker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [lastPeriodDate, setLastPeriodDate] = useState(new Date());

  const handleLastPeriodChange = (e) => {
    setLastPeriodDate(new Date(e.target.value));
  };

  // Calculate 28 days after the selected date
  const calculateNextPeriodDate = () => {
    const nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate()-1);
    return nextPeriodDate;
  };
  // Calculate 18 to 24 days after the selected date
  const calculatePinkDatesRange = () => {
    const startDate = new Date(lastPeriodDate);
    startDate.setDate(startDate.getDate());
    
    const endDate = new Date(lastPeriodDate);
    endDate.setDate(endDate.getDate() + 4);

    return { startDate, endDate };
  };

  const getTileContent = ({ date }) => {
    // Highlight the date 28 days after the selected date in red
    if (date.toISOString().split('T')[0] === calculateNextPeriodDate().toISOString().split('T')[0]) {
      return <div style={{ backgroundColor: 'black', borderRadius: '50%', padding: '8px' }}></div>;
    }

    // Highlight the date 18 to 24 days after the selected date in pink
    const { startDate, endDate } = calculatePinkDatesRange();
    if (date >= startDate && date <= endDate) {
      return <div style={{ backgroundColor: 'gray', borderRadius: '50%', padding: '8px' }}></div>;
    }
    
    return null;
  };

  return (
    <div className={css.wrapper}>
      <h2>Exams Schedule</h2>
      <div className={css.lastPeriod}>
        <h3>Select Your Exam Start Date</h3>
        <input
          type="date"
          value={lastPeriodDate.toISOString().split('T')[0]}
          onChange={handleLastPeriodChange}
        />
      </div>
      <div className={css.calender}>
        <h3>Your Schedule here</h3>
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          tileContent={getTileContent}
        />
      </div>
      <div className={css.specify}>
        <ul>
          <li><CircleIcon className={css.icon1}/>: Exam Start Date</li><br/>
          <li><CircleIcon className={css.icon2}/>: Other Exams</li><br/>
        </ul>
      </div>
    </div>
  );
}

export default PeriodTracker;
